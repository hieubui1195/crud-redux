import React, { Component } from 'react';
import WithSecretToLife from './WithSecretToLife';

const DisplayTheSecret = props => {
    <div>
        The secret to life is { props.secretToLife }
    </div>
};

const WrappedComponent = WithSecretToLife(DisplayTheSecret);

export default WrappedComponent;

