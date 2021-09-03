import React, {Component, useState} from "react";

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const {username, message} = form;

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }

    const onClick = () => {
        alert(`${username || 'UNKNOWN USER'} : ${message || 'BLANK MESSAGE'}`);
        setForm({
            username: '',
            message: ''
        });
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
                onChange={onChange}
            />
            <input
                type='text'
                name='message'
                placeholder='Type something'
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>
                Confirm
            </button>
        </div>
    );
}

export default EventPractice;