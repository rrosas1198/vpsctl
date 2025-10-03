import type { SFTPAttributes } from "./sftp-attributes.interface.ts";

/**
 * Represents an open SFTP file or directory handle.
 * Provides methods for reading, writing, and querying file information.
 * See: libssh2_sftp_handle struct and libssh2_sftp_* functions in libssh2.
 */
export interface SFTPHandle {
    /**
     * Reads data from the file or directory into the buffer.
     * Corresponds to libssh2_sftp_read() for files and libssh2_sftp_readdir() for directories.
     * @param buffer Buffer to read data into.
     */
    read(buffer: Uint8Array): Promise<number>;
    /**
     * Writes data to the file.
     * Corresponds to libssh2_sftp_write().
     * @param data Data to write.
     */
    write(data: Uint8Array): Promise<number>;
    /**
     * Closes the handle and releases resources.
     * Corresponds to libssh2_sftp_close().
     */
    close(): Promise<void>;
    /**
     * Sets the file pointer to the specified offset.
     * Used for random access in files.
     * No direct libssh2 equivalent; managed in client logic.
     * @param offset Offset in bytes.
     */
    seek(offset: bigint): void;
    /**
     * Returns the current file pointer position.
     * No direct libssh2 equivalent; managed in client logic.
     */
    tell(): bigint;
    /**
     * Retrieves file attributes for the open handle.
     * Corresponds to libssh2_sftp_fstat().
     */
    stat(): Promise<SFTPAttributes>;
}
