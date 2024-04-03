import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

export default function Notifications(_props) {
return (
        <div className='Notifications'>
            <button style={{display: 'inline', 
            position: 'absolute', 
            right: '20px'
            }}
            aria-label='Close'
            onClick={() =>  {
                console.log('Close button has been clicked')
            }}>
                <img src='close-icon.png' alt='close-icon' style={{width: '15px', height: '15px'}}/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li dangerouslySetInnerHTML={getLatestNotification()}></li>
            </ul>
        </div>
    )
};