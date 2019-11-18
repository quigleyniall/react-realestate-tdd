import React from 'react';
import { Field } from 'redux-form';
import Dropdown from '../../../components/Dropdown';

interface IProps {
  btnTest: string;
  btnText: string;
  btnClass: string;
}

const PriceInput = (props: IProps) => (
  <Dropdown
    btnClass={props.btnClass}
    btnTest={props.btnTest}
    btnText={props.btnText}
    render={() => (
      <div className="p-4">
        <p>Price Range</p>
        <div className="d-flex justify-content-around align-items-center">
          <Field
            data-test="price-min"
            name="priceMin"
            component="input"
            type="text"
            placeholder="Min"
            className="mr-2 form-control"
          />
          &nbsp;-&nbsp;
          <Field
            data-test="price-max"
            name="priceMax"
            component="input"
            type="text"
            placeholder="Max"
            className="mr-2 form-control"
          />
        </div>
      </div>
    )}
  />
);

export default PriceInput;
