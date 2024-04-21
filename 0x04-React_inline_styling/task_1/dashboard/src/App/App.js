import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#ffffff',
		display: 'flex',
		flexDirection: 'column',
	},
	footer: {
		backgroundColor: '#333',
		color: '#fff',
		textAlign: 'center',
		padding: '10px 0',
		position: 'fixed',
		bottom: '0',
		width: '100%',
	},
});

class App extends Component {
	componentDidMount() {
		window.addEventListener('keydown', this.keyDownHandler);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.keyDownHandler);
	}

	keyDownHandler = (e) => {
		if (e.keyCode === 72 && e.ctrlKey) {
			alert('Logging you out');
			this.props.logOut();
		}
	};

	render() {
		const { isLoggedIn } = this.props;

		const listCourses = [
			{ id: 1, name: 'ES6', credit: '60' },
			{ id: 2, name: 'Webpack', credit: '20' },
			{ id: 3, name: 'React', credit: '40' },
		];

		const listNotifications = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
			{ id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
		];

		return (
			<div className={css(styles.body)}>
				<Notifications listNotifications={listNotifications} />
				<Header />
				<div className="App-body">
					{isLoggedIn ? (
						<BodySectionWithMarginBottom title="Course list">
							<CourseList listCourses={listCourses} />
						</BodySectionWithMarginBottom>
					) : (
						<BodySectionWithMarginBottom title="Login in to continue">
							<Login />
						</BodySectionWithMarginBottom>
					)}
					<BodySection title="News from the School">
						<p>Boring random text</p>
					</BodySection>
				</div>
				<div className={css(styles.footer)}>
					<Footer />
				</div>
			</div>
		);
	}
}

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => {
		console.log('logOut function console log for testing');
	},
};

App.propTypes = {
	isLoggedIn: propTypes.bool,
	logOut: propTypes.func,
};

export default App;
