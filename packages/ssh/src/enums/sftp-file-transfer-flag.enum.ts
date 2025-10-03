/**
 * SFTP file transfer flags used to specify file access modes and operations.
 * These correspond to the SFTP protocol and libssh2 constants (LIBSSH2_FXF_*).
 * Used in SFTPClient.open and related file operations.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2_sftp.h
 */
export enum SFTPFileTransferFlag {
    /**
     * Open the file for reading.
     * Corresponds to LIBSSH2_FXF_READ in libssh2.
     * Used to request read access to a file.
     */
    FileTransferRead = 0x00000001,
    /**
     * Open the file for writing.
     * Corresponds to LIBSSH2_FXF_WRITE in libssh2.
     * Used to request write access to a file.
     */
    FileTransferWrite = 0x00000002,
    /**
     * Append data to the file.
     * Corresponds to LIBSSH2_FXF_APPEND in libssh2.
     * Used to append data to the end of a file.
     */
    FileTransferAppend = 0x00000004,
    /**
     * Create the file if it does not exist.
     * Corresponds to LIBSSH2_FXF_CREAT in libssh2.
     * Used to create a new file.
     */
    FileTransferCreate = 0x00000008,
    /**
     * Truncate the file to zero length if it exists.
     * Corresponds to LIBSSH2_FXF_TRUNC in libssh2.
     * Used to clear the file contents on open.
     */
    FileTransferTruncate = 0x00000010,
    /**
     * Fail if the file already exists (exclusive create).
     * Corresponds to LIBSSH2_FXF_EXCL in libssh2.
     * Used to ensure a new file is created exclusively.
     */
    FileTransferExclusive = 0x00000020
}
