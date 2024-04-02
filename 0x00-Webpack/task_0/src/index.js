import $ from 'jquery';

$(document).ready(function() {
    //create and append first paragraph
    let paragraph1 = $('<p>').text('Holberton Dashboard');
    $('body').append(paragraph1);

    //create and append second paragraph
    let paragraph2 = $('<p>').text('Dashboard data for the students');
    $('body').append(paragraph2);

    //create and append third paragraph
    let paragraph3 = $('<p>').text('Copyright - Holberton School');
    $('body').append(paragraph3);
});
