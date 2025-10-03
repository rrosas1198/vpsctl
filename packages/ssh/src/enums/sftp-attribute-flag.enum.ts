/**
 * SFTP attribute flags used to indicate which file attributes are present in an SFTP packet.
 * These correspond to the SFTP protocol and libssh2 constants (LIBSSH2_SFTP_ATTR_*).
 * Used in file attribute operations to specify which fields are valid.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2_sftp.h
 */
export enum SFTPAttributeFlag {
    /**
     * Indicates that the file size attribute is present.
     * Corresponds to LIBSSH2_SFTP_ATTR_SIZE in libssh2.
     * Used to specify the file size in SFTPAttributes.
     */
    AttributeSize = 0x00000001,
    /**
     * Indicates that the user ID and group ID attributes are present.
     * Corresponds to LIBSSH2_SFTP_ATTR_UIDGID in libssh2.
     * Used to specify the file owner and group.
     */
    AttributeUserIdGroupId = 0x00000002,
    /**
     * Indicates that the file permissions attribute is present.
     * Corresponds to LIBSSH2_SFTP_ATTR_PERMISSIONS in libssh2.
     * Used to specify file mode and type.
     */
    AttributePermissions = 0x00000004,
    /**
     * Indicates that the access and modification time attributes are present.
     * Corresponds to LIBSSH2_SFTP_ATTR_ACMODTIME in libssh2.
     * Used to specify last access and modification times.
     */
    AttributeAccessModificationTime = 0x00000008,
    /**
     * Indicates that extended attributes are present.
     * Corresponds to LIBSSH2_SFTP_ATTR_EXTENDED in libssh2.
     * Used for vendor-specific or protocol extensions.
     */
    AttributeExtended = 0x80000000
}
