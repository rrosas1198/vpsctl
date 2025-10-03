import type { SFTPAttributes } from "./sftp-attributes.interface.ts";
import type { SFTPEntry } from "./sftp-entry.interface.ts";
import type { SFTPHandle } from "./sftp-handle.interface.ts";

/**
 * SFTP client interface for file and directory operations over SFTP.
 * Methods correspond to SFTP protocol operations and libssh2 API functions.
 * See: libssh2_sftp_* functions in libssh2.
 */
export interface SFTPClient {
    /**
     * Opens a file for reading or writing.
     * Corresponds to libssh2_sftp_open().
     * @param filename Path to the file.
     * @param flags File open flags (see SFTPFileTransferFlag).
     * @param mode File permission mode (see SFTPPermissionMode).
     */
    open(filename: string, flags?: number, mode?: number): Promise<SFTPHandle>;
    /**
     * Opens a directory for reading entries.
     * Corresponds to libssh2_sftp_opendir().
     * @param path Path to the directory.
     */
    opendir(path: string): Promise<SFTPHandle>;
    /**
     * Reads directory entries from an open directory handle.
     * Corresponds to libssh2_sftp_readdir().
     * @param handle Directory handle.
     */
    readdir(handle: SFTPHandle): Promise<SFTPEntry[]>;
    /**
     * Retrieves file attributes for a given path.
     * Corresponds to libssh2_sftp_stat().
     * @param path Path to the file or directory.
     */
    stat(path: string): Promise<SFTPAttributes>;
    /**
     * Retrieves file attributes for a symbolic link.
     * Corresponds to libssh2_sftp_lstat().
     * @param path Path to the symbolic link.
     */
    lstat(path: string): Promise<SFTPAttributes>;
    /**
     * Removes a file.
     * Corresponds to libssh2_sftp_unlink().
     * @param filename Path to the file.
     */
    unlink(filename: string): Promise<void>;
    /**
     * Creates a new directory.
     * Corresponds to libssh2_sftp_mkdir().
     * @param path Path to the directory.
     * @param mode Directory permission mode (see SFTPPermissionMode).
     */
    mkdir(path: string, mode?: number): Promise<void>;
    /**
     * Removes a directory.
     * Corresponds to libssh2_sftp_rmdir().
     * @param path Path to the directory.
     */
    rmdir(path: string): Promise<void>;
    /**
     * Renames a file or directory.
     * Corresponds to libssh2_sftp_rename().
     * @param oldpath Current path.
     * @param newpath New path.
     */
    rename(oldpath: string, newpath: string): Promise<void>;
    /**
     * Creates a symbolic link.
     * Corresponds to libssh2_sftp_symlink().
     * @param target Target path.
     * @param linkpath Link path.
     */
    symlink(target: string, linkpath: string): Promise<void>;
    /**
     * Reads the target of a symbolic link.
     * Corresponds to libssh2_sftp_readlink().
     * @param path Path to the symbolic link.
     */
    readlink(path: string): Promise<string>;
    /**
     * Resolves the real path of a file or directory.
     * Corresponds to libssh2_sftp_realpath().
     * @param path Path to resolve.
     */
    realpath(path: string): Promise<string>;
    /**
     * Closes the SFTP client and releases resources.
     * Corresponds to libssh2_sftp_shutdown().
     */
    close(): Promise<void>;
}
