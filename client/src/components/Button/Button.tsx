import React from 'react';
import PropTypes from 'prop-types';

interface IProps {
  onPress: () => void;
  text: string;
  active?: boolean;
  btnClass: string;
  test: string;
}

const Button = ({ onPress, text, active, btnClass, test }: IProps) => (
  <button
    data-test={`${test}-button`}
    type="button"
    className={active ? `btn btn-${btnClass} active` : `btn btn-${btnClass}`}
    style={{ textTransform: 'capitalize' }}
    onClick={onPress}
  >
    {text}
  </button>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  btnClass: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired
};

export default Button;
