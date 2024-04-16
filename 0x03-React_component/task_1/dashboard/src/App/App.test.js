import { shallow, mount } from 'enzyme';
import React from 'react';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';

describe('<App />', () => {
	// Shallow render tests
	it('Tests that App renders without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	});

	it('Contains Notifications component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.contains(<Notifications />)).toBe(true);
	});

	it('Contains Header component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Header').length).toBe(1);
	});

	it('Contains Login component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.contains(<Login />)).toBe(true);
	});

	it('Contains Footer component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Footer').length).toBe(1);
	});

	// Mount tests (for testing component lifecycle and methods)
	it('Tests that the Login component is rendered', () => {
		const wrapper = mount(<App isLoggedIn={true} />);
		expect(wrapper.contains(Login)).toBe(false);
		wrapper.unmount();
	});

	it('Tests that CourseList component is rendered', () => {
		const wrapper = mount(<App isLoggedIn />);
		expect(wrapper.find('CourseList').length).toBe(1);
		wrapper.unmount();
	});

	it(`Verifies that alert is called when ctrl-h is pressed`, () => {
		const AlertSpy = jest.spyOn(window, 'alert');
		const wrapper = mount(<App isLoggedIn />);
		wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });
		expect(AlertSpy).toHaveBeenCalledWith('Logging you out');
		wrapper.unmount();
	});

	it(`Verifies that logOut function is called when ctrl-h is pressed`, () => {
		const ConsoleSpy = jest.spyOn(global.console, 'log');
		const wrapper = mount(<App isLoggedIn />);
		wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });
		expect(ConsoleSpy).toHaveBeenCalledWith('logOut function console log for testing');
		wrapper.unmount();
	});
});
