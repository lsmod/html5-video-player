import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import App from '../src/App'

const wrapper = shallow(<App />);

describe('(Component) App', () => {
  it('type div', () => {
    expect(wrapper.type()).to.eql('div');
  });
});
