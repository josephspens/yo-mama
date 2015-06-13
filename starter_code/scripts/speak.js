/**
 * An object with text to speech functionality. We're adding the Speak class to
 * the window, which means it's globally available for other modules.
 */
window.Speak = (function () {
    /**
     * PRIVATE VARIABLES
     * -----------------
     */
    // A browser check to make sure text to speech is supported
    var textToSpeechIsEnabled = 'speechSynthesis' in window;

    /**
     * PRIVATE METHODS
     * -----------------
     */

    /**
     * Uses text to voice javascript API to speak a string of text
     * @param {string} text Some text for the device to speak
     * @private
     */
    function sayText(text) {
        // First check to see if the device supports text to speech
        if (textToSpeechIsEnabled) {
            // TODO(9)
        }
    }

    /**
     * PUBLIC METHODS
     * ----------------
     */
    return {
        say: sayText
    };
})();
