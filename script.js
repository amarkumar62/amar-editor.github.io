document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded before executing JavaScript

    // Function to change the background color
    function changeBackgroundColor() {
        // Generate a random color
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        // Apply the random color to the body background
        document.body.style.backgroundColor = randomColor;
    }

    // Find the button element by its ID
    var colorChangeButton = document.getElementById('colorChangeButton');

    // Attach a click event listener to the button
    colorChangeButton.addEventListener('click', changeBackgroundColor);
});
