/**
 * SSH initialization flags used to control library initialization behavior.
 * These correspond to libssh2 constants (LIBSSH2_INIT_NO_CRYPTO).
 * Used when initializing the libssh2 library to control cryptographic operations.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2.h
 */
export enum SSHInitFlag {
    /**
     * Disable cryptography during initialization.
     * Corresponds to LIBSSH2_INIT_NO_CRYPTO in libssh2.
     * Used for testing or environments where crypto is not required.
     */
    NoCrypto = 0x0001
}
