/**
 * Callback function for keyboard-interactive SSH authentication.
 * Receives prompts and returns responses.
 * Used in libssh2_userauth_keyboard_interactive() as the response handler.
 */
export interface SSHKeyboardInteractiveCallback {
    (prompts: SSHKeyboardInteractivePrompt[]): Promise<string[]>;
}

/**
 * Represents a prompt for keyboard-interactive SSH authentication.
 * Used in libssh2_userauth_keyboard_interactive() to describe each prompt.
 */
export interface SSHKeyboardInteractivePrompt {
    /**
     * Prompt text to display to the user.
     * Corresponds to the 'prompt' field in libssh2_userauth_keyboard_interactive() callback.
     */
    text: string;
    /**
     * True if user input should be echoed.
     * Corresponds to the 'echo' field in libssh2_userauth_keyboard_interactive() callback.
     */
    echo: boolean;
}
