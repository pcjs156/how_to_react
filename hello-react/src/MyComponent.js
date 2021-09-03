import React, {Component} from "react";
import PropsTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };

    static propsTypes = {
        name: PropsTypes.string,
        favoriteNumber: PropsTypes.number.isRequired
    };

    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                Hello. My name is {name}. <br/>
                children value is {children}. <br/>
                My favorite number is {favoriteNumber}.
            </div>
        );
    }
}

export default MyComponent;
