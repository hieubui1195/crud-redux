import React from 'react';
import Hello from '../../components/Hello';
import { shallow } from 'enzyme';

it('Hello component render', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.find('p').text()).toEqual('Hello');
});
