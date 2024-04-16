import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

function Footer(props) {
	return (
		<footer className={css(bodyStyles.footer)}>
			<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
		</footer>
	);
}

const primaryColor = '#E11D3F';

const bodyStyles = StyleSheet.create({
	footer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderTop: '3px solid var(--primary-color)',
		padding: '1rem',
		fontStyle: 'italic'
		
	}
});

export default Footer;
