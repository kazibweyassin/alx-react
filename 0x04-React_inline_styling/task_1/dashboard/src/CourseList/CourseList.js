import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	table: {
		display: 'table',
		border: '1px solid',
		borderCollapse: 'collapse',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '90%',
	},
	headerCell: {
		textAlign: 'start',
		borderBottom: '1px solid',
	},
	centerHeaderCell: {
		textAlign: 'center',
		border: '1px solid',
		paddingBottom: '1rem',
	},
});

const CourseList = ({ listCourses }) => {
	return (
		<table className={css(styles.table)}>
			<thead>
				<CourseListRow isHeader={true} textFirstCell="Available Courses" />
				<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
			</thead>
			<tbody>
				{/* check if listCourses is empty */}
				{listCourses.length === 0 ? (
					<tr>
						<td colSpan="2" className={css(styles.centerHeaderCell)}>No course available yet</td>
					</tr>
				) : (
					// render listCourses
					listCourses.map((course) => (
						<CourseListRow
							key={course.id}
							textFirstCell={course.name}
							textSecondCell={course.credit}
						/>
					))
				)}
			</tbody>
		</table>
	);
};

CourseList.defaultProps = {
	listCourses: [],
};

CourseList.propTypes = {
	listCourses: propTypes.array,
};

export default CourseList;
