/**
 * SSH channel packet size constants.
 * These correspond to libssh2 constants and control packet size for channel communication.
 * Used in SSHChannel operations to manage data transfer sizes.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2.h
 */
export enum SSHChannelPacket {
    /**
     * Default channel packet size (32KB).
     * Corresponds to LIBSSH2_CHANNEL_PACKET_DEFAULT in libssh2.
     * Controls the maximum size of a single packet sent over a channel.
     */
    PacketDefault = 32768
}
