// We are wrapping all our code in an Immediately Invoked Function Expression,
// or IIFE, which is a technical way of saying a function that runs immediately.
// Doing this prevents us from creating any variables or functions in the global
// scope. This is a good practice for writing modular, or reusable, code.
(function () {
    // 'use strict' is a somewhat new javascript term which tells the browser
    // to not guess at what we're trying to do. If we write something that
    // causes an error, let it happen. Sometimes the browser tries to be smart
    // and guess at what we're trying to do, and possibly break our app.
    'use strict';

    // Jokes will be an array of jokes we fetch from the server and display
    // on the screen.
    var jokes;
    // The server url from which we will fetch jokes
    var jokesUrl = 'https://domain.com';

    /**
     * Fetches jokes from the server
     */
    function fetchJokes() {
        // TODO
    }

    /**
     * Retrieves a random joke from the jokes array
     * @param {array} response Array of joke objects fetched from the server
     */
    function populateJokes(response) {
        // TODO
    }

    /**
     * Displays a joke on the screen
     * @param {object} jokeObject A joke from the jokes array
     */
    function displayJoke(jokeObject) {
        // TODO
    }

    /**
     * Retrieves a random joke from the jokes array
     * @returns {object} A joke from the jokes array
     */
    function getRandomJoke() {
        // TODO
    }

    // Code we want to run when the page loads
    $(function () {
        // TODO: Create an event handler for the button so that clicking the
        // button triggers a new joke.
    });

    // TODO: We need to initially fetch jokes from the server
})();
