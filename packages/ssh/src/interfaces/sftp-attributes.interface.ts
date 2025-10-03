/**
 * Represents SFTP file attributes as defined by the SFTP protocol and libssh2.
 * Used in file and directory operations to describe metadata.
 * See: LIBSSH2_SFTP_ATTRIBUTES struct in libssh2.
 */
export interface SFTPAttributes {
    /**
     * File size in bytes.
     * Corresponds to the 'filesize' field in LIBSSH2_SFTP_ATTRIBUTES.
     * Used to indicate the size of a file.
     */
    size?: bigint;
    /**
     * User ID of the file owner.
     * Corresponds to the 'uid' field in LIBSSH2_SFTP_ATTRIBUTES.
     * Used to specify the owner of the file.
     */
    uid?: number;
    /**
     * Group ID of the file owner.
     * Corresponds to the 'gid' field in LIBSSH2_SFTP_ATTRIBUTES.
     * Used to specify the group ownership of the file.
     */
    gid?: number;
    /**
     * File permission bits (see SFTPPermissionMode and SFTPPermissionBit).
     * Corresponds to the 'permissions' field in LIBSSH2_SFTP_ATTRIBUTES.
     * Used to specify file type and access permissions.
     */
    permissions?: number;
    /**
     * Last access time (UNIX timestamp).
     * Corresponds to the 'atime' field in LIBSSH2_SFTP_ATTRIBUTES.
     * Used to indicate when the file was last accessed.
     */
    atime?: number;
    /**
     * Last modification time (UNIX timestamp).
     * Corresponds to the 'mtime' field in LIBSSH2_SFTP_ATTRIBUTES.
     * Used to indicate when the file was last modified.
     */
    mtime?: number;
}
