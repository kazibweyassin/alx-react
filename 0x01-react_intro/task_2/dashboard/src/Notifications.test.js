import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications', () => {
  test('renders the component', () => {
    render(<Notifications />);
    const notificationsElement = screen.getByText(/Here is the list of notifications/i);
    expect(notificationsElement).toBeInTheDocument();
  });

  test('calls console.log when close button is clicked', () => {
    console.log = jest.fn();
    render(<Notifications />);
    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
  });

  test('renders the latest notification', () => {
    const getLatestNotificationMock = jest.fn().mockReturnValue('This is the latest notification');
    jest.mock('./utils', () => ({
      getLatestNotification: getLatestNotificationMock,
    }));
    render(<Notifications />);
    const latestNotificationElement = screen.getByText(/This is the latest notification/i);
    expect(latestNotificationElement).toBeInTheDocument();
    expect(getLatestNotificationMock).toHaveBeenCalled();
  });
});