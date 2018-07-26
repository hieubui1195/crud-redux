import React, { Component } from 'react';

const WithSecretToLife = (WrappedComponent) => {
    class HOC extends Component {
        render() {
            return (
                <WrappedComponent secretToLife={ 42 } { ...this.props } />
            );
        }
    }

    return HOC;
}

export default WithSecretToLife;
