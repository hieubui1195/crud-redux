import React from 'react';
import TestRenderer from 'react-test-renderer';
import SubComponent from '../../components/SubComponent';
import MyComponent from '../../components/MyComponent';

it('reders correctly', () => {
    const testRenderer = TestRenderer.create(<MyComponent />);
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
    expect(testInstance.findByProps({ className: "sub" }).children).toEqual(['Sub']);
});
