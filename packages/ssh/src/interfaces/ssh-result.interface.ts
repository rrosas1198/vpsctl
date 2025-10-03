/**
 * Represents the result of an SSH command execution.
 * Contains output, error, and exit information.
 * See: libssh2_channel_read(), libssh2_channel_get_exit_status(), libssh2_channel_get_exit_signal() in libssh2.
 */
export interface SSHResult {
    /**
     * Standard output from the command.
     * Corresponds to data read from libssh2_channel_read().
     */
    stdout: string;
    /**
     * Standard error from the command.
     * Corresponds to data read from libssh2_channel_read() with extended data.
     */
    stderr: string;
    /**
     * Exit code returned by the command.
     * Corresponds to libssh2_channel_get_exit_status().
     */
    exitCode: number;
    /**
     * Optional exit signal returned by the command.
     * Corresponds to libssh2_channel_get_exit_signal().
     */
    exitSignal?: string;
}
