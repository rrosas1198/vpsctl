/**
 * SSH error codes returned by libssh2 operations.
 * These codes indicate specific error conditions encountered during SSH operations.
 * Each value corresponds to a LIBSSH2_ERROR_* constant in libssh2.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2.h
 */
export enum SSHErrorCode {
    /**
     * No error occurred.
     * LIBSSH2_ERROR_NONE
     */
    None = 0,
    /**
     * No socket available.
     * LIBSSH2_ERROR_SOCKET_NONE
     */
    SocketNone = -1,
    /**
     * Failed to receive SSH banner.
     * LIBSSH2_ERROR_BANNER_RECV
     */
    BannerReceive = -2,
    /**
     * Failed to send SSH banner.
     * LIBSSH2_ERROR_BANNER_SEND
     */
    BannerSend = -3,
    /**
     * Invalid message authentication code.
     * LIBSSH2_ERROR_INVALID_MAC
     */
    InvalidMessageAuthenticationCode = -4,
    /**
     * Key exchange failed.
     * LIBSSH2_ERROR_KEX_FAILURE
     */
    KeyExchangeFailure = -5,
    /**
     * Memory allocation failure.
     * LIBSSH2_ERROR_ALLOC
     */
    AllocationFailure = -6,
    /**
     * Failed to send data over socket.
     * LIBSSH2_ERROR_SOCKET_SEND
     */
    SocketSendFailure = -7,
    /**
     * Duplicate key exchange failure.
     * LIBSSH2_ERROR_KEX_FAILURE (duplicate)
     */
    KeyExchangeFailureDuplicate = -8,
    /**
     * Operation timed out.
     * LIBSSH2_ERROR_TIMEOUT
     */
    Timeout = -9,
    /**
     * Host key initialization failed.
     * LIBSSH2_ERROR_HOSTKEY_INIT
     */
    HostKeyInitializationFailure = -10,
    /**
     * Host key signing failed.
     * LIBSSH2_ERROR_HOSTKEY_SIGN
     */
    HostKeySignFailure = -11,
    /**
     * Decryption failed.
     * LIBSSH2_ERROR_DECRYPT
     */
    DecryptionFailure = -12,
    /**
     * Socket disconnected.
     * LIBSSH2_ERROR_SOCKET_DISCONNECT
     */
    SocketDisconnect = -13,
    /**
     * Protocol error.
     * LIBSSH2_ERROR_PROTO
     */
    ProtocolError = -14,
    /**
     * Password expired.
     * LIBSSH2_ERROR_PASSWORD_EXPIRED
     */
    PasswordExpired = -15,
    /**
     * File error.
     * LIBSSH2_ERROR_FILE
     */
    FileError = -16,
    /**
     * No authentication method available.
     * LIBSSH2_ERROR_METHOD_NONE
     */
    MethodNone = -17,
    /**
     * Authentication failed.
     * LIBSSH2_ERROR_AUTHENTICATION_FAILED
     */
    AuthenticationFailed = -18,
    /**
     * Public key not recognized.
     * LIBSSH2_ERROR_PUBLICKEY_UNRECOGNIZED
     */
    PublicKeyUnrecognized = -18, // Alias
    /**
     * Public key not verified.
     * LIBSSH2_ERROR_PUBLICKEY_UNVERIFIED
     */
    PublicKeyUnverified = -19,
    /**
     * Channel out of order.
     * LIBSSH2_ERROR_CHANNEL_OUTOFORDER
     */
    ChannelOutOfOrder = -20,
    /**
     * Channel failure.
     * LIBSSH2_ERROR_CHANNEL_FAILURE
     */
    ChannelFailure = -21,
    /**
     * Channel request denied.
     * LIBSSH2_ERROR_CHANNEL_REQUEST_DENIED
     */
    ChannelRequestDenied = -22,
    /**
     * Unknown channel.
     * LIBSSH2_ERROR_CHANNEL_UNKNOWN
     */
    ChannelUnknown = -23,
    /**
     * Channel window exceeded.
     * LIBSSH2_ERROR_CHANNEL_WINDOW_EXCEEDED
     */
    ChannelWindowExceeded = -24,
    /**
     * Channel packet exceeded.
     * LIBSSH2_ERROR_CHANNEL_PACKET_EXCEEDED
     */
    ChannelPacketExceeded = -25,
    /**
     * Channel closed.
     * LIBSSH2_ERROR_CHANNEL_CLOSED
     */
    ChannelClosed = -26,
    /**
     * Channel EOF sent.
     * LIBSSH2_ERROR_CHANNEL_EOF_SENT
     */
    ChannelEndOfFileSent = -27,
    /**
     * SCP protocol error.
     * LIBSSH2_ERROR_SCP_PROTOCOL
     */
    ScpProtocolError = -28,
    /**
     * Zlib error.
     * LIBSSH2_ERROR_ZLIB
     */
    ZlibError = -29,
    /**
     * Socket timeout.
     * LIBSSH2_ERROR_SOCKET_TIMEOUT
     */
    SocketTimeout = -30,
    /**
     * SFTP protocol error.
     * LIBSSH2_ERROR_SFTP_PROTOCOL
     */
    SftpProtocolError = -31,
    /**
     * Request denied.
     * LIBSSH2_ERROR_REQUEST_DENIED
     */
    RequestDenied = -32,
    /**
     * Method not supported.
     * LIBSSH2_ERROR_METHOD_NOT_SUPPORTED
     */
    MethodNotSupported = -33,
    /**
     * Invalid operation.
     * LIBSSH2_ERROR_INVALID
     */
    Invalid = -34,
    /**
     * Invalid poll type.
     * LIBSSH2_ERROR_INVALID_POLL_TYPE
     */
    InvalidPollType = -35,
    /**
     * Public key protocol error.
     * LIBSSH2_ERROR_PUBLICKEY_PROTOCOL
     */
    PublicKeyProtocolError = -36,
    /**
     * Try again.
     * LIBSSH2_ERROR_EAGAIN
     */
    TryAgain = -37,
    /**
     * Buffer too small.
     * LIBSSH2_ERROR_BUFFER_TOO_SMALL
     */
    BufferTooSmall = -38,
    /**
     * Bad use of API.
     * LIBSSH2_ERROR_BAD_USE
     */
    BadUse = -39,
    /**
     * Compression error.
     * LIBSSH2_ERROR_COMPRESSION
     */
    CompressionError = -40,
    /**
     * Out of boundary.
     * LIBSSH2_ERROR_OUT_OF_BOUNDARY
     */
    OutOfBoundary = -41,
    /**
     * Agent protocol error.
     * LIBSSH2_ERROR_AGENT_PROTOCOL
     */
    AgentProtocolError = -42,
    /**
     * Failed to receive data over socket.
     * LIBSSH2_ERROR_SOCKET_RECV
     */
    SocketReceiveFailure = -43,
    /**
     * Encryption failed.
     * LIBSSH2_ERROR_ENCRYPT
     */
    EncryptionFailure = -44,
    /**
     * Bad socket.
     * LIBSSH2_ERROR_BAD_SOCKET
     */
    BadSocket = -45,
    /**
     * Known hosts error.
     * LIBSSH2_ERROR_KNOWN_HOSTS
     */
    KnownHostsError = -46,
    /**
     * Channel window full.
     * LIBSSH2_ERROR_CHANNEL_WINDOW_FULL
     */
    ChannelWindowFull = -47,
    /**
     * Keyfile authentication failed.
     * LIBSSH2_ERROR_KEYFILE_AUTH_FAILED
     */
    KeyfileAuthenticationFailed = -48,
    /**
     * Random generation error.
     * LIBSSH2_ERROR_RANDOM_GENERATION_FAILED
     */
    RandomGenerationError = -49,
    /**
     * Missing user authentication banner.
     * LIBSSH2_ERROR_MISSING_USERAUTH_BANNER
     */
    MissingUserAuthenticationBanner = -50,
    /**
     * Algorithm unsupported.
     * LIBSSH2_ERROR_ALGO_UNSUPPORTED
     */
    AlgorithmUnsupported = -51,
    /**
     * Message authentication code failure.
     * LIBSSH2_ERROR_MAC_FAILURE
     */
    MessageAuthenticationCodeFailure = -52,
    /**
     * Hash initialization failure.
     * LIBSSH2_ERROR_HASH_INIT
     */
    HashInitializationFailure = -53,
    /**
     * Hash calculation failure.
     * LIBSSH2_ERROR_HASH_CALC
     */
    HashCalculationFailure = -54
}
