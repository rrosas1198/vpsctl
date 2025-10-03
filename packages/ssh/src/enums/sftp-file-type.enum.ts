/**
 * SFTP file types as defined by the SFTP protocol and libssh2.
 * Used to identify the type of a file entry in SFTP directory listings and stat operations.
 * Each value corresponds to a LIBSSH2_SFTP_TYPE_* constant in libssh2.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2_sftp.h
 */
export enum SFTPFileType {
    /**
     * Regular file (LIBSSH2_SFTP_TYPE_REGULAR).
     * Standard file type for data storage.
     */
    RegularFile = 1,
    /**
     * Directory (LIBSSH2_SFTP_TYPE_DIRECTORY).
     * Container for files and other directories.
     */
    Directory = 2,
    /**
     * Symbolic link (LIBSSH2_SFTP_TYPE_SYMLINK).
     * Reference to another file or directory.
     */
    SymbolicLink = 3,
    /**
     * Special file (LIBSSH2_SFTP_TYPE_SPECIAL).
     * Device or other non-standard file type.
     */
    SpecialFile = 4,
    /**
     * Unknown file type (LIBSSH2_SFTP_TYPE_UNKNOWN).
     * Type could not be determined.
     */
    UnknownFileType = 5,
    /**
     * Socket file (LIBSSH2_SFTP_TYPE_SOCKET).
     * Used for inter-process communication.
     */
    SocketFile = 6,
    /**
     * Character device file (LIBSSH2_SFTP_TYPE_CHARDEV).
     * Represents a character device.
     */
    CharacterDeviceFile = 7,
    /**
     * Block device file (LIBSSH2_SFTP_TYPE_BLOCKDEV).
     * Represents a block device.
     */
    BlockDeviceFile = 8,
    /**
     * FIFO (named pipe) file (LIBSSH2_SFTP_TYPE_FIFO).
     * Used for pipe-based communication.
     */
    FifoFile = 9
}
