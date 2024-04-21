import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	appLogo: {
		height: '200px',
		width: '200px',
	},
	headerTitle: {
		marginLeft: '3rem',
	},
	appHeader: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		color: 'var(--primary-color)',
		borderBottom: '3px solid var(--primary-color)',
	},
});

function Header(props) {
	return (
		<header className={css(styles.appHeader)}>
			<img src={logo} className={css(styles.appLogo)} alt="logo" />
			<h1 className={css(styles.headerTitle)}>School dashboard</h1>
		</header>
	);
}

export default Header;
