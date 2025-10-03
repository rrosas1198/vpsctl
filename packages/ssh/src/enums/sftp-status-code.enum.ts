/**
 * SFTP status codes returned by SFTP operations.
 * These correspond to the SFTP protocol and libssh2 constants (LIBSSH2_FX_*).
 * Used to indicate the result of SFTP requests.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2_sftp.h
 */
export enum SFTPStatusCode {
    /**
     * Operation completed successfully.
     * LIBSSH2_FX_OK
     */
    Ok = 0,
    /**
     * End of file reached.
     * LIBSSH2_FX_EOF
     */
    EndOfFile = 1,
    /**
     * File does not exist.
     * LIBSSH2_FX_NO_SUCH_FILE
     */
    NoSuchFile = 2,
    /**
     * Permission denied.
     * LIBSSH2_FX_PERMISSION_DENIED
     */
    PermissionDenied = 3,
    /**
     * General failure.
     * LIBSSH2_FX_FAILURE
     */
    Failure = 4,
    /**
     * Bad message received.
     * LIBSSH2_FX_BAD_MESSAGE
     */
    BadMessage = 5,
    /**
     * No connection available.
     * LIBSSH2_FX_NO_CONNECTION
     */
    NoConnection = 6,
    /**
     * Connection lost.
     * LIBSSH2_FX_CONNECTION_LOST
     */
    ConnectionLost = 7,
    /**
     * Operation not supported.
     * LIBSSH2_FX_OP_UNSUPPORTED
     */
    OperationUnsupported = 8,
    /**
     * Invalid file handle.
     * LIBSSH2_FX_INVALID_HANDLE
     */
    InvalidHandle = 9,
    /**
     * Path does not exist.
     * LIBSSH2_FX_NO_SUCH_PATH
     */
    NoSuchPath = 10,
    /**
     * File already exists.
     * LIBSSH2_FX_FILE_ALREADY_EXISTS
     */
    FileAlreadyExists = 11,
    /**
     * Write protect error.
     * LIBSSH2_FX_WRITE_PROTECT
     */
    WriteProtect = 12,
    /**
     * No media available.
     * LIBSSH2_FX_NO_MEDIA
     */
    NoMedia = 13,
    /**
     * No space left on filesystem.
     * LIBSSH2_FX_NO_SPACE_ON_FILESYSTEM
     */
    NoSpaceOnFilesystem = 14,
    /**
     * Quota exceeded.
     * LIBSSH2_FX_QUOTA_EXCEEDED
     */
    QuotaExceeded = 15,
    /**
     * Unknown principal.
     * LIBSSH2_FX_UNKNOWN_PRINCIPAL
     */
    UnknownPrincipal = 16,
    /**
     * Lock conflict.
     * LIBSSH2_FX_LOCK_CONFLICT
     */
    LockConflict = 17,
    /**
     * Directory not empty.
     * LIBSSH2_FX_DIR_NOT_EMPTY
     */
    DirectoryNotEmpty = 18,
    /**
     * Not a directory.
     * LIBSSH2_FX_NOT_A_DIRECTORY
     */
    NotADirectory = 19,
    /**
     * Invalid filename.
     * LIBSSH2_FX_INVALID_FILENAME
     */
    InvalidFilename = 20,
    /**
     * Link loop detected.
     * LIBSSH2_FX_LINK_LOOP
     */
    LinkLoop = 21
}
