import React, { Component } from 'react';
import propTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	bodySectionWithMargin: {
		marginBottom: '40px',
	}
});

class BodySectionWithMarginBottom extends Component {
	render() {
		return (
			<div className="bodySectionWithMargin">
				{/* calls BodySection with all props */}
				{/* "title" prop will be in h2, all else in following p tag */}
				<BodySection {...this.props} />
			</div>
		)
	}
}


BodySectionWithMarginBottom.propTypes = {
	title: propTypes.string.isRequired,
	children: propTypes.oneOfType([
		propTypes.string,
		propTypes.element
	])
}

BodySectionWithMarginBottom.defaultProps = {
	children: <React.Fragment />
}

export default BodySectionWithMarginBottom