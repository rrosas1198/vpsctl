#!/bin/bash
set -e

LIBSSH2_VERSION="1.11.1"
LIBSSH2_URL="https://github.com/libssh2/libssh2/releases/download/libssh2-${LIBSSH2_VERSION}/libssh2-${LIBSSH2_VERSION}.tar.gz"
BUILD_DIR="build"
LIB_DIR="lib"

# Detect current platform
OS=$(uname -s | tr '[:upper:]' '[:lower:]')
ARCH=$(uname -m)

# Normalize architecture names
case $ARCH in
    "x86_64"|"amd64") ARCH="x86_64" ;;
    "arm64"|"aarch64") ARCH="aarch64" ;;
    *) echo "Unsupported architecture: $ARCH" && exit 1 ;;
esac

# Windows detection
case "$OS" in
    "mingw"*|"msys"*|"cygwin"*|"windows_nt"|"win32")
        OS="windows"
        ;;
esac

PLATFORM="${OS}_${ARCH}"
echo "Building libssh2 for platform: $PLATFORM"

# Create directories
mkdir -p "$BUILD_DIR" "$LIB_DIR/$PLATFORM"

# Download and extract libssh2 source
echo "Downloading libssh2 $LIBSSH2_VERSION..."
curl -L "$LIBSSH2_URL" -o "$BUILD_DIR/libssh2.tar.gz"
tar -xzf "$BUILD_DIR/libssh2.tar.gz" -C "$BUILD_DIR"
cd "$BUILD_DIR/libssh2-${LIBSSH2_VERSION}"

# Clean any previous build
make clean 2>/dev/null || true

echo "Using CMake build system..."

# Check if CMake is available
if ! command -v cmake &> /dev/null; then
    echo "CMake not found. Please install cmake"
    echo "Ubuntu/Debian: sudo apt-get install cmake"
    echo "macOS: brew install cmake"
    echo "Windows: winget install Kitware.CMake"
    exit 1
fi

# Create build directory and configure with CMake
mkdir -p cmake-build
cd cmake-build

if [[ "$OS" == "windows" ]]; then
    cmake .. -G "Visual Studio 17 2022" -A x64 -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=ON -DBUILD_EXAMPLES=OFF -DBUILD_TESTING=OFF -DCRYPTO_BACKEND=OpenSSL
    cmake --build . --config Release

    # Copy DLL to lib directory
    echo "Installing binary..."
    cp Release/libssh2.dll "../../../$LIB_DIR/$PLATFORM/"
else
    cmake .. \
        -DCMAKE_BUILD_TYPE=Release \
        -DBUILD_SHARED_LIBS=ON \
        -DBUILD_EXAMPLES=OFF \
        -DBUILD_TESTING=OFF \
        -DCRYPTO_BACKEND=OpenSSL

    # Build with CMake
    echo "Building libssh2..."
    make -j$(nproc 2>/dev/null || sysctl -n hw.ncpu 2>/dev/null || echo 4)

    # Copy library to lib directory  
    echo "Installing binary..."
    case $OS in
        "linux")
            cp src/libssh2.so* "../../../$LIB_DIR/$PLATFORM/"
            ;;
        "darwin") 
            cp src/libssh2.*.dylib "../../../$LIB_DIR/$PLATFORM/"
            ;;
        *)
            echo "Unsupported OS: $OS"
            exit 1
            ;;
    esac
fi

# Cleanup
cd ../../..
rm -rf "$BUILD_DIR"

echo "libssh2 built successfully for $PLATFORM"
echo "Binary location: $LIB_DIR/$PLATFORM/"

# Verify binary exists
if [[ -f "$LIB_DIR/$PLATFORM/libssh2.so" ]] || [[ -f "$LIB_DIR/$PLATFORM/libssh2.dylib" ]] || [[ -f "$LIB_DIR/$PLATFORM/libssh2.dll" ]]; then
    echo "Build completed successfully!"
else
    echo "Build failed - binary not found"
    exit 1
fi
