import React, { Component } from 'react'
import logo from '../assets/logo.jpg'

function Header(props) {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1>School dashboard</h1>
		</header>
	)
}

const primaryColor = '#e11d3f';

const headerstyles = StyleSheet.create({
	h1: {
		marginLeft: '3rem'
	},

	appHeader: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		color: `${primaryColor}`,
		borderBottom: `1px solid ${primaryColor}`,
	},

	appLogo: {
		height: '200px',
		width: '200px'
	}
});



export default Header