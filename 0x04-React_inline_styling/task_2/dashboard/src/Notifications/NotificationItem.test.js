import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

// shallow render NotificationItem component
describe('<NotificationItem />', () => {
	it('Tests that NotificationItem renders without crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBe(true);
	});

	it('Passes dummy `type` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.find('li').text()).toBe('test');
	});

	it('Passes dummy `value` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.find('li').text()).toBe('test');
	});

	it('Passes dummy `html` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHTML' }} />);
		expect(wrapper.html()).toContain('dangerouslySetInnerHTML');
	});
});
