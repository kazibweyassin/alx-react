//import jQuery fom node_modules
import $ from 'jquery';

//import lodash
import _ from 'lodash';


//append elements to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append(`<button>Click here to get started</button>`);
$('body').append(`<p id="count"></p>`);
$('body').append('<p>Copyright - Holberton School</p>');


//bind lodash's debounce function to the button
$('button').on('click', _.debounce(updateCounter, 500));

let count = 0;
//update the counter
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}