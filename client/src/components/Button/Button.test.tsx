import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import { findByTestAttr, checkProps } from '../../test/testUtils';


const onPressMockFn = jest.fn();

const defaultProps = {
  text: 'Click me',
  onPress: onPressMockFn,
  btnClass: 'primary',
  active: false,
  test: 'search'
}

const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Button {...setupProps} />);
}

describe('button test', () => {
  let wrapper;
  let buttonElement;

  beforeEach(() => {
    wrapper = setup();
    buttonElement = findByTestAttr(wrapper, 'search-button');
  })
  test('button renders without error', () => {
    expect(buttonElement.length).toBe(1);
  });

  test('button runs onClick function', () => {
    buttonElement.simulate('click');
    const onPressMockFnCallCount = onPressMockFn.mock.calls.length;
    expect(onPressMockFnCallCount).toBe(1);
  });

  test('check props sent to button', () => {
    const expectedProps = { onPress: jest.fn(), text: 'click me', btnClass: 'primary', test: 'search' }; 
    checkProps(Button, expectedProps);
  });

  test('renders text click me', () => {
    expect(buttonElement.text()).toBe('Click me');
  })

  test('renders appropaite className', () => {
    expect(buttonElement.hasClass('btn-primary')).toBe(true);
  })

  test('button has active class when active is true', () => {
    const wrapper = setup({ active: true });
    const buttonElement = findByTestAttr(wrapper, 'search-button');
    expect(buttonElement.hasClass('active')).toBe(true);
  });

  test('button doesnt have active class when active is false', () => {
    expect(buttonElement.hasClass('active')).not.toBe(true);
  })
})