import React from 'react';
import DropDown from '../../../components/Dropdown';

interface IProps {
  btnTest: string;
  btnText: string;
  btnClass: string;
  click: (param: string) => string;
}

const TypeInput = (props: IProps) => (
  <DropDown
    btnClass={props.btnClass}
    btnTest={props.btnTest}
    btnText={props.btnText}
    render={({ closeDropDown, changeBtnText }) => (
      <ul className="list-group">
        <li
          data-test="buy-li"
          className="list-group-item"
          onClick={() => {
            closeDropDown();
            changeBtnText('Buy');
            props.click('buy');
          }}
        >
          Buy
        </li>
        <li
          data-test="rent-li"
          className="list-group-item"
          onClick={() => {
            closeDropDown();
            changeBtnText('Rent');
            props.click('rent');
          }}
        >
          Rent
        </li>
      </ul>
    )}
  />
);

export default TypeInput;
