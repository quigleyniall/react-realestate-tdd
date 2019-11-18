import React from 'react';
import Dropdown from '../../../components/Dropdown';
import BathDropdown from './BathDropdown';

interface IProps {
  btnTest: string;
  btnText: string;
  btnClass: string;
  click: (param: string) => string;
  urlMin: string;
  urlMax: string;
}

const BathInput = (props: IProps) => (
  <Dropdown
    btnClass={props.btnClass}
    btnTest={props.btnTest}
    btnText={props.btnText}
    render={({ changeBtnText }) => (
      <BathDropdown
        urlMin={props.urlMin}
        urlMax={props.urlMax}
        click={props.click}
        changeBtnText={changeBtnText}
      />
    )}
  />
);

export default BathInput;
