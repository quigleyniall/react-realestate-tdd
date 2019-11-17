import React from 'react';
import PropTypes from 'prop-types';

interface IProps {
  onPress?: (some?: any) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  type?: 'submit' | 'button';
  text: string;
  active?: boolean;
  btnClass?: string;
  test: string;
}

const Button = ({
  onPress,
  text,
  active,
  btnClass,
  test,
  onMouseEnter,
  onMouseLeave,
  type
}: IProps) => (
  <button
    data-test={`${test}-button`}
    type={type}
    className={active ? `btn btn-${btnClass} active` : `btn btn-${btnClass}`}
    style={{ textTransform: 'capitalize' }}
    onClick={onPress}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {text}
  </button>
);

Button.defaultProps = {
  type: 'button'
};

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  btnClass: PropTypes.string,
  test: PropTypes.string.isRequired
};

export default Button;
