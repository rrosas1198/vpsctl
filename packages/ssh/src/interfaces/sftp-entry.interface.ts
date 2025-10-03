import type { SFTPAttributes } from "./sftp-attributes.interface.ts";

/**
 * Represents a directory entry in SFTP, as returned by readdir.
 * Contains file attributes and type information.
 * See: LIBSSH2_SFTP_ATTRIBUTES and libssh2_sftp_readdir() in libssh2.
 */
export interface SFTPEntry {
    /**
     * Name of the entry (file or directory).
     * Corresponds to the 'filename' field in libssh2_sftp_readdir().
     */
    name: string;
    /**
     * Long name (may include permissions, owner, etc.).
     * Corresponds to the 'longname' field in libssh2_sftp_readdir().
     * Often formatted similar to 'ls -l' output.
     */
    longname?: string;
    /**
     * File attributes (see SFTPAttributes).
     * Corresponds to the 'attrs' field in libssh2_sftp_readdir().
     */
    attributes: SFTPAttributes;
    /**
     * True if the entry is a directory.
     * Determined from the permissions/type field in SFTPAttributes.
     */
    isDirectory: boolean;
    /**
     * True if the entry is a regular file.
     * Determined from the permissions/type field in SFTPAttributes.
     */
    isFile: boolean;
    /**
     * True if the entry is a symbolic link.
     * Determined from the permissions/type field in SFTPAttributes.
     */
    isSymlink: boolean;
}
