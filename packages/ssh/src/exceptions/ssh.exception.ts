import { SSHErrorCode } from "../enums/ssh-error-code.enum.ts";

/**
 * Exception class for SSH errors.
 * Represents errors returned by SSH operations, mapping SSHErrorCode values to human-readable messages.
 * Used to handle and propagate SSH protocol errors in the client.
 * Closely related to libssh2 error codes (LIBSSH2_ERROR_*).
 */
export class SSHException extends Error {
    /**
     * SSH error code associated with the error.
     * Corresponds to LIBSSH2_ERROR_* constants in libssh2.
     */
    readonly #_code: SSHErrorCode;
    /**
     * Optional system error number (errno), if available.
     * Can be used for low-level socket or OS errors.
     */
    readonly #_errno: number | undefined;

    /**
     * Constructs a new SSHException.
     * @param message Human-readable error message.
     * @param code SSHErrorCode value representing the error type.
     * @param errno Optional system error number.
     */
    constructor(message: string, code: SSHErrorCode, errno?: number) {
        super(message);
        this.name = "SSHException";
        this.#_code = code;
        this.#_errno = errno;
    }

    /**
     * Returns the SSH error code for this exception.
     * Used to programmatically inspect the error type.
     */
    get code(): number {
        return this.#_code;
    }

    /**
     * Returns the system error number, if available.
     * Useful for diagnosing low-level socket or OS errors.
     */
    get errno(): number | undefined {
        return this.#_errno;
    }

    /**
     * Creates an SSHException from an error code, using a default message if none is provided.
     * @param code SSHErrorCode value.
     * @param message Optional custom error message.
     * @returns SSHException instance.
     */
    static fromCode(code: SSHErrorCode, message?: string): SSHException {
        const message_ = message || SSHException.#_getStatusName(code);
        return new SSHException(message_, code);
    }

    /**
     * Maps an SSHErrorCode to a human-readable message.
     * Used internally to provide default error messages for known SSH error codes.
     * @param code SSHErrorCode value.
     * @returns String description of the error code.
     */
    static #_getStatusName(code: SSHErrorCode): string {
        switch (code) {
            case SSHErrorCode.None:
                return "No error";
            case SSHErrorCode.SocketNone:
                return "Socket error";
            case SSHErrorCode.BannerReceive:
                return "Banner receive error";
            case SSHErrorCode.BannerSend:
                return "Banner send error";
            case SSHErrorCode.InvalidMessageAuthenticationCode:
                return "Invalid MAC";
            case SSHErrorCode.KeyExchangeFailure:
                return "Key exchange failure";
            case SSHErrorCode.AllocationFailure:
                return "Memory allocation error";
            case SSHErrorCode.SocketSendFailure:
                return "Socket send error";
            case SSHErrorCode.KeyExchangeFailureDuplicate:
                return "Key exchange failure (duplicate)";
            case SSHErrorCode.Timeout:
                return "Timeout";
            case SSHErrorCode.HashInitializationFailure:
                return "Host key initialization error";
            case SSHErrorCode.HostKeySignFailure:
                return "Host key signature error";
            case SSHErrorCode.DecryptionFailure:
                return "Decryption error";
            case SSHErrorCode.SocketDisconnect:
                return "Socket disconnected";
            case SSHErrorCode.ProtocolError:
                return "Protocol error";
            case SSHErrorCode.PasswordExpired:
                return "Password expired";
            case SSHErrorCode.FileError:
                return "File error";
            case SSHErrorCode.MethodNone:
                return "No authentication method available";
            case SSHErrorCode.AuthenticationFailed:
                return "Authentication failed";
            case SSHErrorCode.PublicKeyUnverified:
                return "Public key unverified";
            case SSHErrorCode.ChannelOutOfOrder:
                return "Channel out of order";
            case SSHErrorCode.ChannelFailure:
                return "Channel failure";
            case SSHErrorCode.ChannelRequestDenied:
                return "Channel request denied";
            case SSHErrorCode.ChannelUnknown:
                return "Unknown channel";
            case SSHErrorCode.ChannelWindowExceeded:
                return "Channel window exceeded";
            case SSHErrorCode.ChannelPacketExceeded:
                return "Channel packet exceeded";
            case SSHErrorCode.ChannelClosed:
                return "Channel closed";
            case SSHErrorCode.ChannelEndOfFileSent:
                return "Channel EOF sent";
            case SSHErrorCode.ScpProtocolError:
                return "SCP protocol error";
            case SSHErrorCode.ZlibError:
                return "Compression error";
            case SSHErrorCode.SocketTimeout:
                return "Socket timeout";
            case SSHErrorCode.SftpProtocolError:
                return "SFTP protocol error";
            case SSHErrorCode.RequestDenied:
                return "Request denied";
            case SSHErrorCode.MethodNotSupported:
                return "Method not supported";
            case SSHErrorCode.Invalid:
                return "Invalid parameter";
            case SSHErrorCode.InvalidPollType:
                return "Invalid poll type";
            case SSHErrorCode.PublicKeyProtocolError:
                return "Public key protocol error";
            case SSHErrorCode.TryAgain:
                return "Operation would block";
            case SSHErrorCode.BufferTooSmall:
                return "Buffer too small";
            case SSHErrorCode.BadUse:
                return "Bad library usage";
            case SSHErrorCode.CompressionError:
                return "Compression error";
            case SSHErrorCode.OutOfBoundary:
                return "Out of boundary";
            case SSHErrorCode.AgentProtocolError:
                return "SSH agent protocol error";
            case SSHErrorCode.SocketReceiveFailure:
                return "Socket receive error";
            case SSHErrorCode.EncryptionFailure:
                return "Encryption error";
            case SSHErrorCode.BadSocket:
                return "Bad socket";
            case SSHErrorCode.KnownHostsError:
                return "Known hosts error";
            case SSHErrorCode.ChannelWindowFull:
                return "Channel window full";
            case SSHErrorCode.KeyfileAuthenticationFailed:
                return "Key file authentication failed";
            default:
                return "Unknown";
        }
    }
}
