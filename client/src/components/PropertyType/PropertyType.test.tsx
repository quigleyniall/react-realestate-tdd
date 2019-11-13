import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../test/testUtils';
import PropertyType from './PropertyType';


describe('test props appear', () => {
  let wrapper;
  let mockFunction;

  beforeEach(() => {
    mockFunction = jest.fn()
    const props = { image: 'fdfas', title: 'buy a home', desc:'lorem ipsum', buttonText: 'click me', onPress: mockFunction }
    wrapper = shallow(<PropertyType {...props} />);
  });

  test('check props', () => {
  const expectedProps = { image: 'fdfas', title: 'buy a home', desc:'lorem ipsum', buttonText: 'click me', onPress: () => null }
  checkProps(PropertyType, expectedProps);
});

  test('renders without error', () => {
    expect(wrapper.length).toBe(1);
  });

  test('title appears', () => {
    const title = findByTestAttr(wrapper, 'title');
    expect(title.text()).toBe('buy a home')
  });

  test('desc appears', () => {
    const desc = findByTestAttr(wrapper, 'desc');
    expect(desc.text()).toBe('lorem ipsum');
  })

  test('button text appears', () => {
    const button = findByTestAttr(wrapper, 'card-button').dive();
    expect(button.text()).toBe('click me');
  })

  test('button runs function', () => {
    const button = findByTestAttr(wrapper, 'card-button').dive();
    button.simulate('click');
    expect(mockFunction.mock.calls.length).toBe(1);
  })
})