import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const App = ({ isLoggedIn, logOut }) => {
	useEffect(() => {
		const keyDownHandler = (e) => {
			if (e.keyCode === 72 && e.ctrlKey) {
				alert('Logging you out');
				logOut();
			}
		};
		window.addEventListener('keydown', keyDownHandler);
		return () => {
			window.removeEventListener('keydown', keyDownHandler);
		};
	}, [logOut]);

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
		<div className="App">
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
			<div className="App-footer">
				<Footer />
			</div>
		</div>
	);
};

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => {
		console.log('logOut function console log for testing');
	},
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func,
};

export default App;
