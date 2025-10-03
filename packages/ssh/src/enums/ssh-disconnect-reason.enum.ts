/**
 * SSH disconnect reasons as defined by the SSH protocol and libssh2.
 * Used to indicate the reason for a disconnect event.
 * Each value corresponds to an SSH_DISCONNECT_* constant in libssh2.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2.h
 */
export enum SSHDisconnectReason {
    /**
     * Host is not allowed to connect.
     * SSH_DISCONNECT_HOST_NOT_ALLOWED_TO_CONNECT
     */
    HostNotAllowedToConnect = 1,
    /**
     * Protocol error occurred.
     * SSH_DISCONNECT_PROTOCOL_ERROR
     */
    ProtocolError = 2,
    /**
     * Key exchange failed.
     * SSH_DISCONNECT_KEY_EXCHANGE_FAILED
     */
    KeyExchangeFailed = 3,
    /**
     * Reserved for future use.
     * SSH_DISCONNECT_RESERVED
     */
    Reserved = 4,
    /**
     * MAC error occurred.
     * SSH_DISCONNECT_MAC_ERROR
     */
    MacError = 5,
    /**
     * Compression error occurred.
     * SSH_DISCONNECT_COMPRESSION_ERROR
     */
    CompressionError = 6,
    /**
     * Service not available.
     * SSH_DISCONNECT_SERVICE_NOT_AVAILABLE
     */
    ServiceNotAvailable = 7,
    /**
     * Protocol version not supported.
     * SSH_DISCONNECT_PROTOCOL_VERSION_NOT_SUPPORTED
     */
    ProtocolVersionNotSupported = 8,
    /**
     * Host key not verifiable.
     * SSH_DISCONNECT_HOST_KEY_NOT_VERIFIABLE
     */
    HostKeyNotVerifiable = 9,
    /**
     * Connection lost.
     * SSH_DISCONNECT_CONNECTION_LOST
     */
    ConnectionLost = 10,
    /**
     * Disconnected by application.
     * SSH_DISCONNECT_BY_APPLICATION
     */
    ByApplication = 11,
    /**
     * Too many connections.
     * SSH_DISCONNECT_TOO_MANY_CONNECTIONS
     */
    TooManyConnections = 12,
    /**
     * Authentication cancelled by user.
     * SSH_DISCONNECT_AUTH_CANCELLED_BY_USER
     */
    AuthCancelledByUser = 13,
    /**
     * No more authentication methods available.
     * SSH_DISCONNECT_NO_MORE_AUTH_METHODS_AVAILABLE
     */
    NoMoreAuthMethodsAvailable = 14,
    /**
     * Illegal user name.
     * SSH_DISCONNECT_ILLEGAL_USER_NAME
     */
    IllegalUserName = 15
}
