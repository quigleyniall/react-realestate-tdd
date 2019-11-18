import React from 'react';
import Dropdown from '../../../components/Dropdown';
import BedDropdown from './BedDropdown';

interface IProps {
  btnTest: string;
  btnText: string;
  btnClass: string;
  click: (param: any) => any;
  urlMin: string;
  urlMax: string;
}

const BedInput = (props: IProps) => (
  <Dropdown
    btnClass={props.btnClass}
    btnTest={props.btnTest}
    btnText={props.btnText}
    render={({ changeBtnText }) => (
      <BedDropdown
        urlMin={props.urlMin}
        urlMax={props.urlMax}
        click={props.click}
        changeBtnText={changeBtnText}
      />
    )}
  />
);

export default BedInput;
