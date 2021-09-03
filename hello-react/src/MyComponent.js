import React from "react";
import PropsTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => {
    return (
        <div>
            Hello. My name is {name}. <br />
            children value is {children}. <br />
            My favorite number is {favoriteNumber}.
        </div>
    );
}

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propsTypes = {
    name: PropsTypes.string,
    favoriteNumber: PropsTypes.number.isRequired
};

export default MyComponent;
