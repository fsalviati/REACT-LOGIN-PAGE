import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAtrr } from './../../Utils/index';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('It should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });
  it('It should render a logo', () => {
    const wrapper = findByTestAtrr(component, 'logoIMG');
    expect(wrapper.length).toBe(1);
  });
});
