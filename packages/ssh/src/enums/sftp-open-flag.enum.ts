/**
 * SFTP open flags used to specify the type of resource to open (file or directory).
 * These correspond to the SFTP protocol and libssh2 constants (LIBSSH2_SFTP_OPENFILE, LIBSSH2_SFTP_OPENDIR).
 * Used in SFTPClient.open and SFTPClient.opendir.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2_sftp.h
 */
export enum SFTPOpenFlag {
    /**
     * Open a file for reading or writing.
     * Corresponds to LIBSSH2_SFTP_OPENFILE in libssh2.
     */
    OpenFile = 0,
    /**
     * Open a directory for reading entries.
     * Corresponds to LIBSSH2_SFTP_OPENDIR in libssh2.
     */
    OpenDirectory = 1
}
