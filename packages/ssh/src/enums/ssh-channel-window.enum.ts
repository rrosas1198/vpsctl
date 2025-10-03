/**
 * SSH channel window sizes and minimum adjustment values.
 * These correspond to libssh2 constants and control channel flow and buffering.
 * Used in SSHChannel operations to manage data flow.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2.h
 */
export enum SSHChannelWindow {
    /**
     * Default channel window size (2MB).
     * Corresponds to LIBSSH2_CHANNEL_WINDOW_DEFAULT in libssh2.
     * Controls the maximum amount of data buffered for a channel.
     */
    WindowDefault = 2 * 1024 * 1024,
    /**
     * Minimum window adjustment (1KB).
     * Used to trigger window size increases in libssh2.
     */
    MinAdjust = 1024
}
