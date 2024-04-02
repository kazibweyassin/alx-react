import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');

    $('body').append('<p>Dashboard data for the students</p>');

    $('body').append('<button id="mybutton">Click here to get started</button>');

    $('body').append('<p id="count">0</p>');

    $('body').append('<p>Copyright - Holberton School</p>');

    // Track the number of times the button element is clicked
    let count = 0;
    //Denouce the click event on the button with a delay of 500ms
    const debouncedClick = _.debounce(() => {
        count += 1;
        $('#count').text(`${count} clicks on the button`);
}, 500);

    $('#mybutton').on('click', debouncedClick();
});
