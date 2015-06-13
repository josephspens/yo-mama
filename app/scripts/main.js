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
    var jokesUrl = 'https://demo8670611.mockable.io/mama';

    /**
     * Fetches jokes from the server
     */
    function fetchJokes() {
        $.get(jokesUrl, populateJokes);
    }

    /**
     * Retrieves a random joke from the jokes array
     * @param {array} response Array of joke objects fetched from the server
     */
    function populateJokes(response) {
        // The `response` array from the server will contain all the joke
        // objects we will use throughout the app.
        jokes = response;
    }

    /**
     * Displays a joke on the screen
     * @param {object} jokeObject A joke from the jokes array
     */
    function displayJoke(jokeObject) {
        // `jokeObject` is an object, in order to get the text string for the
        // joke, we need to access the `joke` property on the joke object.
        var text = jokeObject.joke;
        // The `hide` and `fadeIn` are used for the fade animation. `1000` is
        // how long the fade animation will take in milliseconds. 1000ms = 1s.
        $('.joke-text').hide().text(text).fadeIn(1000);
    }

    /**
     * Retrieves a random joke from the jokes array
     * @returns {object} A joke from the jokes array
     */
    function getRandomJoke() {
        // Generate a random number between 0 and 1
        var randomDecimal = Math.random();
        // Transform the range to between 0 and the length of the jokes array
        // ex: Between 0 and 10, if there are 10 jokes
        var randomNumber = randomDecimal * jokes.length;
        // Round the number down so we get a whole number.
        // This way we can use the number as an index for the array. If the
        // jokes array has 10 jokes, then the indices will be 0 through 9.
        // ex: The range will be between 0 and 9, so 7.4 will become 7
        var randomWholeNumber = Math.floor(randomNumber);
        // Using `randomeWholeNumber` as an index in the jokes array, we will
        // get a joke and return it.
        return jokes[randomWholeNumber];
    }

    // Code we want to run when the page loads
    $(function () {
        // When the user clicks the joke button, we need to get a random joke
        // from the jokes array, then display that joke on the screen.
        $('.joke-button').on('click', function () {
            var joke = getRandomJoke();
            displayJoke(joke);
        });
    });

    // We need to initially fetch jokes from the server
    fetchJokes();
})();
