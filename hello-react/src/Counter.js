import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }

    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>Immutable Value: {fixedNumber}</h2>
                <button
                    // Set function that is called when button is clicked with onClick
                    onClick={() => {
                        // Cant set new value to `state` with this.setState
                        this.setState({number: number + 1});
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;