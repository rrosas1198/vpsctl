import { SFTPStatusCode } from "../enums/sftp-status-code.enum.ts";

/**
 * Exception class for SFTP errors.
 * Represents errors returned by SFTP operations, mapping SFTPStatusCode values to human-readable messages.
 * Used to handle and propagate SFTP protocol errors in the client.
 * Closely related to libssh2 SFTP error codes (LIBSSH2_FX_*).
 */
export class SFTPException extends Error {
    /**
     * SFTP status code associated with the error.
     * Corresponds to LIBSSH2_FX_* constants in libssh2.
     */
    readonly #_code: SFTPStatusCode;

    /**
     * Constructs a new SFTPException.
     * @param message Human-readable error message.
     * @param code SFTPStatusCode value representing the error type.
     */
    constructor(message: string, code: SFTPStatusCode) {
        super(message);
        this.name = "SFTPException";
        this.#_code = code;
    }

    /**
     * Returns the SFTP status code for this exception.
     * Used to programmatically inspect the error type.
     */
    get code(): number {
        return this.#_code;
    }

    /**
     * Creates an SFTPException from a status code, using a default message if none is provided.
     * @param code SFTPStatusCode value.
     * @param message Optional custom error message.
     * @returns SFTPException instance.
     */
    static fromCode(code: SFTPStatusCode, message?: string): SFTPException {
        const message_ = message || SFTPException.#_getStatusName(code);
        return new SFTPException(message_, code);
    }

    /**
     * Maps an SFTPStatusCode to a human-readable message.
     * Used internally to provide default error messages for known SFTP status codes.
     * @param code SFTPStatusCode value.
     * @returns String description of the status code.
     */
    static #_getStatusName(code: SFTPStatusCode): string {
        switch (code) {
            case SFTPStatusCode.Ok:
                return "Success";
            case SFTPStatusCode.EndOfFile:
                return "End of file";
            case SFTPStatusCode.NoSuchFile:
                return "No such file or directory";
            case SFTPStatusCode.PermissionDenied:
                return "Permission denied";
            case SFTPStatusCode.Failure:
                return "Failure";
            case SFTPStatusCode.BadMessage:
                return "Bad message";
            case SFTPStatusCode.NoConnection:
                return "No connection";
            case SFTPStatusCode.ConnectionLost:
                return "Connection lost";
            case SFTPStatusCode.OperationUnsupported:
                return "Operation unsupported";
            case SFTPStatusCode.InvalidHandle:
                return "Invalid handle";
            case SFTPStatusCode.NoSuchPath:
                return "No such path";
            case SFTPStatusCode.FileAlreadyExists:
                return "File already exists";
            case SFTPStatusCode.WriteProtect:
                return "Write protected";
            case SFTPStatusCode.NoMedia:
                return "No media";
            case SFTPStatusCode.NoSpaceOnFilesystem:
                return "No space on filesystem";
            case SFTPStatusCode.QuotaExceeded:
                return "Quota exceeded";
            case SFTPStatusCode.UnknownPrincipal:
                return "Unknown principal";
            case SFTPStatusCode.LockConflict:
                return "Lock conflict";
            case SFTPStatusCode.DirectoryNotEmpty:
                return "Directory not empty";
            case SFTPStatusCode.NotADirectory:
                return "Not a directory";
            case SFTPStatusCode.InvalidFilename:
                return "Invalid filename";
            case SFTPStatusCode.LinkLoop:
                return "Link loop";
            default:
                return "Unknown";
        }
    }
}
