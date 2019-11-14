import React from 'react';
import DropDownList from './DropDownList';
import './DropDown.scss';

interface IProps {
  type: string;
  display: boolean;
  data: any;
  click: any;
}

const DropDown = (props: IProps) => {
  const dropDownList =
    props.type === 'dropDownList' ? (
      <DropDownList
        display={props.display}
        data={props.data}
        click={props.click}
      />
    ) : null;
  return <div className="dropdown">{dropDownList}</div>;
};

export default DropDown;
