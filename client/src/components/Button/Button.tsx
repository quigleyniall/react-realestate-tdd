import React from 'react';
import PropTypes from 'prop-types';

interface IProps {
  onPress: () => void;
  text: string;
  active?: boolean;
  btnClass: string;
}

const Button = ({ onPress, text, active, btnClass }: IProps) => (
  <button
    data-test="button"
    type="button"
    className={active ? `btn btn-${btnClass} active` : `btn btn-${btnClass}`}
    onClick={onPress}
  >
    {text}
  </button>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  btnClass: PropTypes.string.isRequired
};

export default Button;
