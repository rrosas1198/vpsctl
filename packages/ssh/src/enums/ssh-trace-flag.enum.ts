/**
 * SSH trace flags used for debugging and tracing SSH operations.
 * These correspond to libssh2 constants and control trace output for different subsystems.
 * Used in debugging and development to enable verbose logging.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2.h
 */
export enum SSHTraceFlag {
    /**
     * Trace transport layer operations.
     * LIBSSH2_TRACE_TRANS
     */
    Transport = 1 << 1,
    /**
     * Trace key exchange operations.
     * LIBSSH2_TRACE_KEX
     */
    KeyExchange = 1 << 2,
    /**
     * Trace authentication operations.
     * LIBSSH2_TRACE_AUTH
     */
    Authentication = 1 << 3,
    /**
     * Trace connection operations.
     * LIBSSH2_TRACE_CONN
     */
    Connection = 1 << 4,
    /**
     * Trace SCP operations.
     * LIBSSH2_TRACE_SCP
     */
    Scp = 1 << 5,
    /**
     * Trace SFTP operations.
     * LIBSSH2_TRACE_SFTP
     */
    Sftp = 1 << 6,
    /**
     * Trace error events.
     * LIBSSH2_TRACE_ERROR
     */
    Error = 1 << 7,
    /**
     * Trace public key operations.
     * LIBSSH2_TRACE_PUBLICKEY
     */
    PublicKey = 1 << 8,
    /**
     * Trace socket operations.
     * LIBSSH2_TRACE_SOCKET
     */
    Socket = 1 << 9
}
