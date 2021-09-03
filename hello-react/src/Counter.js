import React, {Component} from "react";

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>Immutable Value: {fixedNumber}</h2>
                <button
                    // Set function that is called when button is clicked with onClick
                    onClick={() => {
                        this.setState(prevState => {
                            return {
                                number: prevState.number + 1
                            };
                        });

                        // The code above and the code below do exactly the same thing
                        // The below code means that function returns object directly
                        this.setState(prevState => ({
                            number: prevState.number + 1
                        }));
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;