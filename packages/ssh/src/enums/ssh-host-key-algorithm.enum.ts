/**
 * SSH host key algorithms supported by libssh2.
 * Used to identify the type of host key algorithm during key exchange and verification.
 * Each value corresponds to a LIBSSH2_HOSTKEY_TYPE_* constant in libssh2.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2.h
 */
export enum SSHHostKeyAlgorithm {
    /**
     * Unknown algorithm.
     * Used when the host key type cannot be determined.
     */
    Unknown = 0,
    /**
     * RSA algorithm.
     * Corresponds to LIBSSH2_HOSTKEY_TYPE_RSA in libssh2.
     * Most common host key type.
     */
    Rsa = 1,
    /**
     * DSS algorithm (deprecated).
     * Corresponds to LIBSSH2_HOSTKEY_TYPE_DSS in libssh2.
     * Deprecated due to security concerns.
     * @deprecated Use RSA or Ed25519 instead.
     */
    Dss = 2,
    /**
     * ECDSA 256-bit algorithm.
     * Corresponds to LIBSSH2_HOSTKEY_TYPE_ECDSA_256 in libssh2.
     */
    Ecdsa256 = 3,
    /**
     * ECDSA 384-bit algorithm.
     * Corresponds to LIBSSH2_HOSTKEY_TYPE_ECDSA_384 in libssh2.
     */
    Ecdsa384 = 4,
    /**
     * ECDSA 521-bit algorithm.
     * Corresponds to LIBSSH2_HOSTKEY_TYPE_ECDSA_521 in libssh2.
     */
    Ecdsa521 = 5,
    /**
     * Ed25519 algorithm.
     * Corresponds to LIBSSH2_HOSTKEY_TYPE_ED25519 in libssh2.
     * Modern, secure host key type.
     */
    Ed25519 = 6
}
