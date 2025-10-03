/**
 * SSH host key hash types supported by libssh2.
 * Used to specify the hash algorithm for host key verification.
 * Each value corresponds to a LIBSSH2_HOSTKEY_HASH_* constant in libssh2.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2.h
 */
export enum SSHHostKeyHashType {
    /**
     * MD5 hash algorithm.
     * LIBSSH2_HOSTKEY_HASH_MD5
     */
    MD5 = 1,
    /**
     * SHA-1 hash algorithm.
     * LIBSSH2_HOSTKEY_HASH_SHA1
     */
    SHA1 = 2,
    /**
     * SHA-256 hash algorithm.
     * LIBSSH2_HOSTKEY_HASH_SHA256
     */
    SHA256 = 3
}
