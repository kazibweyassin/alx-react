import React, { Component } from 'react';
import propTypes from 'prop-types';
import { css } from 'aphrodite';


// Reusable component
class BodySection extends Component {
	render() {
		const { title } = this.props;

		return (
			<div className={css(styles.marginBottom, '40px')}>
				<h2>{title}</h2>
				{/* All remaining prop children are put into this span */}
				<span>{this.props.children}</span>
			</div>
		);
	}
}


BodySection.propTypes = {
	title: propTypes.string.isRequired,
	children: propTypes.oneOfType([
		propTypes.string,
		propTypes.element
	])
}

BodySection. defaultProps = {
	children: <React.Fragment />
}

export default BodySection