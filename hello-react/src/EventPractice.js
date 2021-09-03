import React, {Component} from "react";

class EventPractice extends Component {
    state = {
        username: '',
        message: ''
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = (e) => {
        alert(`${this.state.username || 'UNKNOWN USER'} : ${this.state.message || 'BLANK MESSAGE'}`);
        this.setState({
            username: '',
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>Event practice</h1>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='Type something'
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>
                    Confirm
                </button>
            </div>
        );
    }
}

export default EventPractice;