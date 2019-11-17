import React from 'react';
import Dropdown from '../../../components/Dropdown';
import BathDropdown from './BathDropdown';


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

const BathInput = ({ btnTest, btnText, btnClass, click, urlMin, urlMax }) => (
      <Dropdown btnClass={btnClass} btnTest={btnTest} btnText={btnText} render={({closeDropDown, changeBtnText}) => (
        <BathDropdown urlMin={urlMin} urlMax={urlMax} click={click} changeBtnText={changeBtnText} />        
    )} />
    );

export default BathInput;
