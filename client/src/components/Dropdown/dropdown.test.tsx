import React from 'react';
import { shallow } from 'enzyme';
import DropDown from './Dropdown';
import { findByTestAttr } from '../../test/testUtils';

const renderMock = jest.fn();

const props = {
  btnTest: 'test',
  btnText: 'test-button',
  btnClass: 'string',
  render: renderMock
}

const setup = () => shallow(<DropDown {...props} />);

describe('test dropdown', () => {
  test('has show class when hovered', () => {
    const wrapper = setup();
    wrapper.setState({ activeDropDown: true });
    const dropdown = findByTestAttr(wrapper, 'dropdown');

    expect(dropdown.hasClass('show')).toBe(true);
    expect(dropdown.hasClass('hide')).toBe(false);
  })

  test('has hide class when not hovered', () => {
    const wrapper = setup();
    wrapper.setState({ activeDropDown: false });
    const dropdown = findByTestAttr(wrapper, 'dropdown');
    
    expect(dropdown.hasClass('hide')).toBe(true);
    expect(dropdown.hasClass('show')).toBe(false);
  })
})