/**
 * SSH channel extended data modes.
 * These correspond to libssh2 constants and control how extended data (stderr) is handled.
 * Used in SSHChannel operations to manage error output.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2.h
 */
export enum SSHChannelExtendedData {
    /**
     * Normal extended data handling.
     * Default mode in libssh2.
     * Error output is sent separately from standard output.
     */
    ExtendedDataNormal = 0,
    /**
     * Ignore extended data.
     * Corresponds to LIBSSH2_CHANNEL_EXTENDED_DATA_IGNORE in libssh2.
     * Error output is discarded.
     */
    ExtendedDataIgnore = 1,
    /**
     * Merge extended data with normal data.
     * Corresponds to LIBSSH2_CHANNEL_EXTENDED_DATA_MERGE in libssh2.
     * Error output is merged with standard output.
     */
    ExtendedDataMerge = 2
}
