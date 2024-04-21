import React, { Component } from 'react';
import WithLoggingHOC from '../HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	root: {
		'--primary-color': '#E11D3F',
		font: '18px Helvetica, Arial, sans-serif',
	},
	AppBody: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '3rem',
		paddingTop: '1rem',
		minHeight: '50vh',
	},
	inputs: {
		display: 'flex',
		flexDirection: 'row',
	},
	input: {
		height: '15px',
		marginLeft: '0.2rem',
	},
	label: {
		marginLeft: '0.3rem',
	},
	button: {
		height: '21px',
	},
});

class Login extends Component {
	render() {
		return (
			<React.Fragment>
				<div className={css(styles.root, 'App')}>
					<main className={css(styles.AppBody, 'App-body')}>
						<p>Login to access the full dashboard</p>
						<div className={css(styles.inputs)}>
							<label htmlFor="email" onClick={() => {
								// select corresponding input
								document.getElementById('password').focus();
							}}>Email</label>
							<input type="email" id="email" className={css(styles.input)} />
							<label htmlFor="password" onClick={() => {
								// select corresponding input
								document.getElementById('password').focus();
							}}>Password</label>
							<input type="password" id="password" className={css(styles.input)} />
							<button className={css(styles.button)}>OK</button>
						</div>
					</main>
				</div>
			</React.Fragment>
		);
	}
}

export default WithLoggingHOC(Login);
