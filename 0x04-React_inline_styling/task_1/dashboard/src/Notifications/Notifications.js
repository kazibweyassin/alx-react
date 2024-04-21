import React, { Component } from 'react';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	root: {
		'--primar-color': '#E11D3F',
	},
	Notifications: {
		border: '1px solid var(--primar-color)',
		padding: '1rem',
	},
	menuItem: {
		position: 'relative',
	},
	menuItemText: {
		right: '3rem',
		position: 'absolute',
	},
	defaultNotification: {
		color: 'blue',
	},
	urgentNotification: {
		color: 'red',
	},
});

class Notification extends Component {
	markAsRead(id) {
		console.log(`Notification ${id} has been read`);
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.listNotifications.length > this.props.listNotifications.length;
	}

	render() {
		const { listNotifications, displayDrawer } = this.props;

		return (
			<>
				<div className={css(styles.menuItem)}>
					<p className={css(styles.menuItemText)}>Your notifications</p>
				</div>
				{displayDrawer && (
					<div className={css(styles.Notifications)}>
						<button
							aria-label='close'
							onClick={() => {
								console.log('Close button has been clicked');
							}}>
							<img src={close_icon} alt="close" height="15px" width="15px"></img>
						</button>
						<p>Here is the list of notifications</p>
						<ul>
							{listNotifications.map(notification => (
								<NotificationItem
									key={notification.id}
									type={notification.type}
									value={notification.value}
									html={notification.html}
									markAsRead={this.markAsRead}
									id={notification.id}
									className={css(
										notification.type === 'default'
											? styles.defaultNotification
											: styles.urgentNotification
									)}
								/>
							))}
						</ul>
					</div>
				)}
			</>
		);
	}
}

Notification.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
};

Notification.propTypes = {
	displayDrawer: propTypes.bool,
	listNotifications: propTypes.arrayOf(NotificationItemShape),
};

export default Notification;
