/**
 * SFTP permission modes for user, group, and others.
 * These correspond to Unix file permission bits and are used in libssh2 for setting file modes.
 * Used in SFTPClient.open, SFTPClient.mkdir, and file attribute operations.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2_sftp.h
 */
export enum SFTPPermissionMode {
    /**
     * User read, write, and execute permissions (rwx------).
     * Equivalent to Unix 0700 and used in LIBSSH2_SFTP_S_IRWXU.
     */
    UserReadWriteExecute = 0o000700,
    /**
     * User read permission (r--------).
     * Equivalent to Unix 0400 and LIBSSH2_SFTP_S_IRUSR.
     */
    UserRead = 0o000400,
    /**
     * User write permission (-w-------).
     * Equivalent to Unix 0200 and LIBSSH2_SFTP_S_IWUSR.
     */
    UserWrite = 0o000200,
    /**
     * User execute permission (--x------).
     * Equivalent to Unix 0100 and LIBSSH2_SFTP_S_IXUSR.
     */
    UserExecute = 0o000100,
    /**
     * Group read, write, and execute permissions (---rwx---).
     * Equivalent to Unix 0070 and LIBSSH2_SFTP_S_IRWXG.
     */
    GroupReadWriteExecute = 0o000070,
    /**
     * Group read permission (---r-----).
     * Equivalent to Unix 0040 and LIBSSH2_SFTP_S_IRGRP.
     */
    GroupRead = 0o000040,
    /**
     * Group write permission (----w----).
     * Equivalent to Unix 0020 and LIBSSH2_SFTP_S_IWGRP.
     */
    GroupWrite = 0o000020,
    /**
     * Group execute permission (-----x---).
     * Equivalent to Unix 0010 and LIBSSH2_SFTP_S_IXGRP.
     */
    GroupExecute = 0o000010,
    /**
     * Other read, write, and execute permissions (------rwx).
     * Equivalent to Unix 0007 and LIBSSH2_SFTP_S_IRWXO.
     */
    OtherReadWriteExecute = 0o000007,
    /**
     * Other read permission (------r--).
     * Equivalent to Unix 0004 and LIBSSH2_SFTP_S_IROTH.
     */
    OtherRead = 0o000004,
    /**
     * Other write permission (-------w-).
     * Equivalent to Unix 0002 and LIBSSH2_SFTP_S_IWOTH.
     */
    OtherWrite = 0o000002,
    /**
     * Other execute permission (--------x).
     * Equivalent to Unix 0001 and LIBSSH2_SFTP_S_IXOTH.
     */
    OtherExecute = 0o000001
}
