import React from 'react';
import SubComponent from './SubComponent';

export default class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <SubComponent foo="bar" />
                <p className="my">
                    Hello
                </p>
            </div>
        );
    }
}
