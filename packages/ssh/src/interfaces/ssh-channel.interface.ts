/**
 * Represents an SSH channel for executing commands and transferring data.
 * Provides methods for reading, writing, and managing the channel state.
 * See: libssh2_channel_* functions in libssh2.
 */
export interface SSHChannel {
    /**
     * Reads data from the channel.
     * Corresponds to libssh2_channel_read().
     * @param bufferSize Optional buffer size for reading.
     */
    read(bufferSize?: number): Promise<Uint8Array>;
    /**
     * Writes data to the channel.
     * Corresponds to libssh2_channel_write().
     * @param data Data to write (string or Uint8Array).
     */
    write(data: Uint8Array | string): Promise<number>;
    /**
     * Executes a command on the remote host.
     * Corresponds to libssh2_channel_exec().
     * @param command Command string to execute.
     */
    exec(command: string): Promise<void>;
    /**
     * Starts an interactive shell session.
     * Corresponds to libssh2_channel_shell().
     */
    shell(): Promise<void>;
    /**
     * Closes the channel and releases resources.
     * Corresponds to libssh2_channel_close() and libssh2_channel_free().
     */
    close(): Promise<void>;
    /**
     * True if end-of-file has been reached on the channel.
     * Corresponds to libssh2_channel_eof().
     */
    eof: boolean;
    /**
     * Optional exit code returned by the remote process.
     * Corresponds to libssh2_channel_get_exit_status().
     */
    exitCode?: number;
    /**
     * Optional exit signal returned by the remote process.
     * Corresponds to libssh2_channel_get_exit_signal().
     */
    exitSignal?: string;
}
