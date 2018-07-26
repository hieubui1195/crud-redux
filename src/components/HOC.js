import React, { Component } from 'react';

let newData = {
    data: 'From HOC'
};

const HOC = ComposedComponent => class extends Component {
    componentDidMount() {
        this.setState({
            data: newData.data
        });
    };

    render() {
        return <ComposedComponent { ...this.props } { ...this.state } />;
    };
};

class MyComponent extends Component {
    render() {
        return(
            <div>
                <h1>
                    { this.props.data }
                </h1>
            </div>
        )
    }
}

export default HOC(MyComponent);

