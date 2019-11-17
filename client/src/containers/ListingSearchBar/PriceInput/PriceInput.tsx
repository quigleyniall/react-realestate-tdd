import React from 'react';
import { Field } from 'redux-form';
import Dropdown from '../../../components/Dropdown';

interface IProps {
  btnTest: string;
  btnText: string;
  btnClass: string;
}

const PriceInput = ({ btnTest, btnText, btnClass }) => (
      <Dropdown btnClass={btnClass} btnTest={btnTest} btnText={btnText} render={({closeDropDown, changeBtnText}) => (
          <div className="p-4">
            <p>Price Range</p>
            <div className="d-flex justify-content-around align-items-center">
              <Field
                name="priceMin"
                component="input"
                type="text"
                placeholder="Min"
                className="mr-2 form-control"
              />
              &nbsp;-&nbsp;
              <Field
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
