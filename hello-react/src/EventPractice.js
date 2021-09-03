import React, {Component, useState} from "react";

const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);

    const onClick = () => {
        alert(`${username || 'UNKNOWN USER'} : ${message || 'BLANK MESSAGE'}`);
        setUsername('');
        setMessage('');
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>Event practice</h1>
            <input
                type='text'
                name='username'
                placeholder='Username'
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type='text'
                name='message'
                placeholder='Type something'
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>
                Confirm
            </button>
        </div>
    );
}

export default EventPractice;