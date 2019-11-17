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
  changeBtnText: any;
}

interface IState {
  exact: boolean;
}

const BedInput = ({ btnTest, btnText, btnClass, click, urlMin, urlMax }) => (
      <Dropdown btnClass={btnClass} btnTest={btnTest} btnText={btnText} render={({closeDropDown, changeBtnText}) => (
        <BedDropdown urlMin={urlMin} urlMax={urlMax} click={click} changeBtnText={changeBtnText} />        
    )} />
    );

export default BedInput;
