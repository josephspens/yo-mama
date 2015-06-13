// Jokes will be an array of jokes we fetch from the server and display
// on the screen.
var jokes;
// The server url from which we will fetch jokes
var jokesUrl = 'https://domain.com';

/**
 * Fetches jokes from the server
 */
function fetchJokes() {
    // TODO(3)
}

/**
 * Retrieves a random joke from the jokes array
 * @param {array} response Array of joke objects fetched from the server
 */
function populateJokes(response) {
    // TODO(4)
}

/**
 * Displays a joke on the screen
 * @param {object} jokeObject A joke from the jokes array
 */
function displayJoke(jokeObject) {
    // TODO(8, 10)
}

/**
 * Retrieves a random joke from the jokes array
 * @returns {object} A joke from the jokes array
 */
function getRandomJoke() {
    // TODO(7)
}

// Code we want to run when the page loads
$(function () {
    // TODO(6): Create an event handler for the button so that clicking the
    // button triggers a new joke.
});

// TODO(5): We need to initially fetch jokes from the server
