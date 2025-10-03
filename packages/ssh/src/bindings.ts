// libssh2 FFI bindings
// Based on libssh2.h v1.11.2 and libssh2_sftp.h

const LIBSSH2_FFI_SYMBOLS = {
    // ---------------------
    // LIBRARY MANAGEMENT
    // ---------------------

    // Initialize the libssh2 library
    libssh2_init: {
        parameters: ["i32"],
        result: "i32"
    },

    // Cleanup the libssh2 library
    libssh2_exit: {
        parameters: [],
        result: "void"
    },

    // Get libssh2 version string
    libssh2_version: {
        parameters: ["i32"],
        result: "pointer"
    },

    // Free libssh2 allocated memory
    libssh2_free: {
        parameters: ["pointer", "pointer"],
        result: "void"
    },

    // ---------------------
    // SESSION MANAGEMENT
    // ---------------------

    // Initialize a session object
    libssh2_session_init_ex: {
        parameters: ["pointer", "pointer", "pointer", "pointer"],
        result: "pointer"
    },

    // Start SSH handshake
    libssh2_session_handshake: {
        parameters: ["pointer", "i32"],
        result: "i32"
    },

    // Set session banner
    libssh2_session_banner_set: {
        parameters: ["pointer", "buffer"],
        result: "i32"
    },

    // Get session banner
    libssh2_session_banner_get: {
        parameters: ["pointer"],
        result: "pointer"
    },

    // Disconnect session
    libssh2_session_disconnect_ex: {
        parameters: ["pointer", "i32", "buffer", "buffer"],
        result: "i32"
    },

    // Free session
    libssh2_session_free: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Get last session error
    libssh2_session_last_error: {
        parameters: ["pointer", "pointer", "pointer", "i32"],
        result: "i32"
    },

    // Get last errno
    libssh2_session_last_errno: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Set session blocking mode
    libssh2_session_set_blocking: {
        parameters: ["pointer", "i32"],
        result: "void"
    },

    // Get session blocking mode
    libssh2_session_get_blocking: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Set session timeout
    libssh2_session_set_timeout: {
        parameters: ["pointer", "i64"],
        result: "void"
    },

    // Get session timeout
    libssh2_session_get_timeout: {
        parameters: ["pointer"],
        result: "i64"
    },

    // Get hostkey hash
    libssh2_hostkey_hash: {
        parameters: ["pointer", "i32"],
        result: "pointer"
    },

    // Get session hostkey
    libssh2_session_hostkey: {
        parameters: ["pointer", "pointer", "pointer"],
        result: "pointer"
    },

    // ---------------------
    // AUTHENTICATION
    // ---------------------

    // List available authentication methods
    libssh2_userauth_list: {
        parameters: ["pointer", "buffer", "u32"],
        result: "pointer"
    },

    // Check if user is authenticated
    libssh2_userauth_authenticated: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Password authentication
    libssh2_userauth_password_ex: {
        parameters: ["pointer", "buffer", "u32", "buffer", "u32", "pointer"],
        result: "i32"
    },

    // Public key authentication from file
    libssh2_userauth_publickey_fromfile_ex: {
        parameters: ["pointer", "buffer", "u32", "buffer", "buffer", "buffer"],
        result: "i32"
    },

    // Public key authentication from memory
    libssh2_userauth_publickey_frommemory: {
        parameters: [
            "pointer",
            "buffer",
            "usize",
            "buffer",
            "usize",
            "buffer",
            "usize",
            "buffer"
        ],
        result: "i32"
    },

    // Keyboard interactive authentication
    libssh2_userauth_keyboard_interactive_ex: {
        parameters: ["pointer", "buffer", "u32", "pointer"],
        result: "i32"
    },

    // ---------------------
    // CHANNEL OPERATIONS
    // ---------------------

    // Open a channel
    libssh2_channel_open_ex: {
        parameters: ["pointer", "buffer", "u32", "u32", "u32", "buffer", "u32"],
        result: "pointer"
    },

    // Direct TCP/IP connection
    libssh2_channel_direct_tcpip_ex: {
        parameters: ["pointer", "buffer", "i32", "buffer", "i32"],
        result: "pointer"
    },

    // Set environment variable
    libssh2_channel_setenv_ex: {
        parameters: ["pointer", "buffer", "u32", "buffer", "u32"],
        result: "i32"
    },

    // Request PTY
    libssh2_channel_request_pty_ex: {
        parameters: [
            "pointer",
            "buffer",
            "u32",
            "buffer",
            "u32",
            "i32",
            "i32",
            "i32",
            "i32"
        ],
        result: "i32"
    },

    // Process startup (shell/exec/subsystem)
    libssh2_channel_process_startup: {
        parameters: ["pointer", "buffer", "u32", "buffer", "u32"],
        result: "i32"
    },

    // Read from channel
    libssh2_channel_read_ex: {
        parameters: ["pointer", "i32", "pointer", "usize"],
        result: "isize"
    },

    // Write to channel
    libssh2_channel_write_ex: {
        parameters: ["pointer", "i32", "buffer", "usize"],
        result: "isize"
    },

    // Check if channel is EOF
    libssh2_channel_eof: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Send EOF to channel
    libssh2_channel_send_eof: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Wait for EOF
    libssh2_channel_wait_eof: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Close channel
    libssh2_channel_close: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Wait for channel to close
    libssh2_channel_wait_closed: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Free channel
    libssh2_channel_free: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Get channel exit status
    libssh2_channel_get_exit_status: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Get channel exit signal
    libssh2_channel_get_exit_signal: {
        parameters: [
            "pointer",
            "pointer",
            "pointer",
            "pointer",
            "pointer",
            "pointer",
            "pointer"
        ],
        result: "i32"
    },

    // Set channel blocking mode
    libssh2_channel_set_blocking: {
        parameters: ["pointer", "i32"],
        result: "void"
    },

    // Handle extended data
    libssh2_channel_handle_extended_data2: {
        parameters: ["pointer", "i32"],
        result: "i32"
    },

    // ---------------------
    // SFTP OPERATIONS
    // ---------------------

    // Initialize SFTP subsystem
    libssh2_sftp_init: {
        parameters: ["pointer"],
        result: "pointer"
    },

    // Shutdown SFTP subsystem
    libssh2_sftp_shutdown: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Get last SFTP error
    libssh2_sftp_last_error: {
        parameters: ["pointer"],
        result: "u64"
    },

    // Open file/directory
    libssh2_sftp_open_ex: {
        parameters: ["pointer", "buffer", "u32", "u64", "i64", "i32"],
        result: "pointer"
    },

    // Read from SFTP handle
    libssh2_sftp_read: {
        parameters: ["pointer", "pointer", "usize"],
        result: "isize"
    },

    // Write to SFTP handle
    libssh2_sftp_write: {
        parameters: ["pointer", "buffer", "usize"],
        result: "isize"
    },

    // Read directory entries
    libssh2_sftp_readdir_ex: {
        parameters: [
            "pointer",
            "pointer",
            "usize",
            "pointer",
            "usize",
            "pointer"
        ],
        result: "i32"
    },

    // Close SFTP handle
    libssh2_sftp_close_handle: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Seek in SFTP file
    libssh2_sftp_seek64: {
        parameters: ["pointer", "u64"],
        result: "void"
    },

    // Tell position in SFTP file
    libssh2_sftp_tell64: {
        parameters: ["pointer"],
        result: "u64"
    },

    // Get/Set file status
    libssh2_sftp_fstat_ex: {
        parameters: ["pointer", "pointer", "i32"],
        result: "i32"
    },

    // Get file/directory status
    libssh2_sftp_stat_ex: {
        parameters: ["pointer", "buffer", "u32", "i32", "pointer"],
        result: "i32"
    },

    // Rename file/directory
    libssh2_sftp_rename_ex: {
        parameters: ["pointer", "buffer", "u32", "buffer", "u32", "i64"],
        result: "i32"
    },

    // Unlink (delete) file
    libssh2_sftp_unlink_ex: {
        parameters: ["pointer", "buffer", "u32"],
        result: "i32"
    },

    // Create directory
    libssh2_sftp_mkdir_ex: {
        parameters: ["pointer", "buffer", "u32", "i64"],
        result: "i32"
    },

    // Remove directory
    libssh2_sftp_rmdir_ex: {
        parameters: ["pointer", "buffer", "u32"],
        result: "i32"
    },

    // Create/read symbolic links
    libssh2_sftp_symlink_ex: {
        parameters: ["pointer", "buffer", "u32", "pointer", "u32", "i32"],
        result: "i32"
    },

    // ---------------------
    // SCP OPERATIONS
    // ---------------------

    // Receive file via SCP
    libssh2_scp_recv2: {
        parameters: ["pointer", "buffer", "pointer"],
        result: "pointer"
    },

    // Send file via SCP
    libssh2_scp_send64: {
        parameters: ["pointer", "buffer", "i32", "i64", "i64", "i64"],
        result: "pointer"
    },

    // ---------------------
    // SSH AGENT OPERATIONS
    // ---------------------

    // Initialize SSH agent
    libssh2_agent_init: {
        parameters: ["pointer"],
        result: "pointer"
    },

    // Connect to SSH agent
    libssh2_agent_connect: {
        parameters: ["pointer"],
        result: "i32"
    },

    // List SSH agent identities
    libssh2_agent_list_identities: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Get SSH agent identity
    libssh2_agent_get_identity: {
        parameters: ["pointer", "pointer", "pointer"],
        result: "i32"
    },

    // Authenticate using SSH agent
    libssh2_agent_userauth: {
        parameters: ["pointer", "buffer", "pointer"],
        result: "i32"
    },

    // Disconnect from SSH agent
    libssh2_agent_disconnect: {
        parameters: ["pointer"],
        result: "i32"
    },

    // Free SSH agent
    libssh2_agent_free: {
        parameters: ["pointer"],
        result: "void"
    },

    // ---------------------
    // KNOWN HOSTS
    // ---------------------

    // Initialize known hosts
    libssh2_knownhost_init: {
        parameters: ["pointer"],
        result: "pointer"
    },

    // Add known host
    libssh2_knownhost_addc: {
        parameters: [
            "pointer",
            "buffer",
            "buffer",
            "buffer",
            "usize",
            "buffer",
            "usize",
            "i32",
            "pointer"
        ],
        result: "i32"
    },

    // Check known host
    libssh2_knownhost_checkp: {
        parameters: [
            "pointer",
            "buffer",
            "i32",
            "buffer",
            "usize",
            "i32",
            "pointer"
        ],
        result: "i32"
    },

    // Delete known host
    libssh2_knownhost_del: {
        parameters: ["pointer", "pointer"],
        result: "i32"
    },

    // Free known hosts
    libssh2_knownhost_free: {
        parameters: ["pointer"],
        result: "void"
    },

    // ---------------------
    // UTILITY FUNCTIONS
    // ---------------------

    // Poll channels and sockets
    libssh2_poll: {
        parameters: ["pointer", "u32", "i64"],
        result: "i32"
    },

    // Keepalive configuration
    libssh2_keepalive_config: {
        parameters: ["pointer", "i32", "u32"],
        result: "void"
    },

    // Send keepalive
    libssh2_keepalive_send: {
        parameters: ["pointer", "pointer"],
        result: "i32"
    },

    // Enable tracing
    libssh2_trace: {
        parameters: ["pointer", "i32"],
        result: "i32"
    }
} as const;

function _findLibraryPath(): string {
    const extension = _inferLibraryExtension();
    const platform = `${Deno.build.os}_${Deno.build.arch}`;
    return `${import.meta.resolve(`../lib/${platform}/libssh2.${extension}`)}`;
}

function _inferLibraryExtension(): string {
    const { os } = Deno.build;

    switch (os) {
        case "windows":
            return "dll";
        case "darwin":
            return "dylib";
        default:
            return "so";
    }
}

const libraryPath = _findLibraryPath();
export const libssh2 = Deno.dlopen(libraryPath, LIBSSH2_FFI_SYMBOLS);

const initResult = libssh2.symbols.libssh2_init(0);

if (initResult !== 0) {
    throw new Error(`Failed to initialize libssh2: ${initResult}`);
}

try {
    Deno.addSignalListener("SIGINT", () => {
        libssh2.symbols.libssh2_exit();
        libssh2.close();
        Deno.exit(0);
    });

    Deno.addSignalListener("SIGTERM", () => {
        libssh2.symbols.libssh2_exit();
        libssh2.close();
        Deno.exit(0);
    });
} catch {
    // Do nothing
}
