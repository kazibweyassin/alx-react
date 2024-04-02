import $ from 'jquery';

import './header.css';

//append elements to the header
$('body').append(`<div id="logo"></div>`);
$('body').append(`<p>Holberton Dashboard</p>`);
console.log('Init header');