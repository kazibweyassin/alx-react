import React, { Component } from 'react';
import propTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';


class BodySectionWithMarginBottom extends Component {
	render() {
		return (
			<div className={css(bodyStyles.BodySectionWithMarginBottom)}>
				{/* calls BodySection with all props */}
				{/* "title" prop will be in h2, all else in following p tag */}
				<BodySection {...this.props} />
			</div>
		)
	}
}

const bodyStyles = StyleSheet.create({
	BodySectionWithMarginBottom: {
		marginBottom: '40px'
	}
})

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