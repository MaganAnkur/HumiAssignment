import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Button from '../';
import {ButtonProps} from '../types';

describe('Button', () => {
  let props: ButtonProps;
  beforeEach(() => {
    props = {
      title: 'Hello',
      onPress: jest.fn(),
    };
  });
  it('should render', () => {
    const {toJSON} = render(<Button {...props} />);
    expect(toJSON).toMatchSnapshot();
  });
  it('should be clickable', () => {
    const {getByText} = render(<Button {...props} />);
    fireEvent.press(getByText('Hello'));
    expect(props.onPress).toHaveBeenCalled();
  });
  it('should disable the button', () => {
    const {container} = render(<Button disabled {...props} />);
    expect(container.props.disabled).toEqual(true);
  });
});
