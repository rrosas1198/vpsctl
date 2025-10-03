import type { SSHKeyboardInteractiveCallback } from "./ssh-keyboard.interface.ts";

/**
 * Represents SSH authentication methods supported by libssh2.
 * Used to specify credentials and authentication type for SSH connections.
 * See: libssh2_userauth_* functions in libssh2.
 */
export type SSHAuthenticationMethod =
    | {
        /**
         * Password authentication.
         * Corresponds to libssh2_userauth_password().
         */
        type: "password";
        /** Password string. */
        password: string;
    }
    | {
        /**
         * Public key authentication.
         * Corresponds to libssh2_userauth_publickey_fromfile() and libssh2_userauth_publickey_frommemory().
         */
        type: "publickey";
        /** Private key string. */
        privateKey: string;
        /** Optional public key string. */
        publicKey?: string;
        /** Optional passphrase for the private key. */
        passphrase?: string;
    }
    | {
        /**
         * SSH agent authentication.
         * Corresponds to libssh2_userauth_agent().
         */
        type: "agent";
    }
    | {
        /**
         * Keyboard-interactive authentication.
         * Corresponds to libssh2_userauth_keyboard_interactive().
         */
        type: "keyboard-interactive";
        /** Callback for keyboard-interactive prompts. */
        responseCallback: SSHKeyboardInteractiveCallback;
    };
