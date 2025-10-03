import type { SSHAuthenticationMethod } from "./ssh-authentication.interface.ts";

/**
 * SSH connection configuration options.
 * Used to specify connection parameters and authentication for SSH sessions.
 * See: libssh2_session_* and libssh2_userauth_* functions in libssh2.
 */
export interface SSHConfig {
    /**
     * Hostname or IP address of the SSH server.
     * Used in libssh2_session_handshake().
     */
    hostname: string;
    /**
     * Optional port number (default: 22).
     * Used in socket connection before libssh2_session_handshake().
     */
    port?: number;
    /**
     * Username for authentication.
     * Used in libssh2_userauth_* functions.
     */
    username: string;
    /**
     * Authentication method (see SSHAuthenticationMethod).
     * Used in libssh2_userauth_* functions.
     */
    auth: SSHAuthenticationMethod;
    /**
     * Optional SSH server banner string.
     * Can be used to display or verify the server banner after handshake.
     */
    banner?: string;
    /**
     * Optional connection timeout in milliseconds.
     * Used to control socket and handshake timeouts.
     */
    timeout?: number;
    /**
     * Optional flag to enable host key verification.
     * Used in host key checking logic after handshake.
     */
    hostKeyVerification?: boolean;
}
