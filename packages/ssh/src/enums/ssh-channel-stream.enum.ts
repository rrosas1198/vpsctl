/**
 * SSH channel stream identifiers used to distinguish between stdout and stderr streams.
 * These correspond to libssh2 constants (LIBSSH2_CHANNEL_EXTENDED_DATA_STDERR).
 * Used in SSHChannel operations to select the output stream.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2.h
 */
export enum SSHChannelStreamId {
    /**
     * Standard output stream (stdout).
     * Used for normal command output.
     * Value 0 is the default stream in libssh2.
     */
    StreamStdout = 0,
    /**
     * Standard error stream (stderr).
     * Corresponds to LIBSSH2_CHANNEL_EXTENDED_DATA_STDERR in libssh2.
     * Used for error output from remote commands.
     */
    StreamStderr = 1
}
