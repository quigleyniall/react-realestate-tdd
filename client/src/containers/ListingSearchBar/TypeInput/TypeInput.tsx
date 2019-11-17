import React from 'react';
import DropDown from '../../../components/Dropdown';

interface IProps {
  btnTest: string;
  btnText: string;
  btnClass: string;
  click: (param: any) => any;
}

const TypeInput = ({ btnTest, btnText, btnClass, click }) => (
  <DropDown btnClass={btnClass} btnTest={btnTest} btnText={btnText} render={({closeDropDown, changeBtnText}) => (
    <ul className="list-group">
      <li className="list-group-item" onClick={() => {
         closeDropDown();
         changeBtnText('Buy');
         click('buy')
      }}>
         Buy
       </li>
       <li className="list-group-item" onClick={() => {
         closeDropDown();
         changeBtnText('Rent');
        click('rent')
      }}>
         Rent
       </li>
     </ul>         
  )} />         
)

export default TypeInput;
