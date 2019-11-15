import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import Button from '../../../components/Button';
import '../ListingSearchBar.scss';

interface IProps {
  btnTest: string;
  btnText: string;
  btnClass: string;
}

interface IState {
  activeDropDown: boolean;
}

class PriceInput extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      activeDropDown: false
    };
  }

  render() {
    const { activeDropDown } = this.state;
    const { btnTest, btnText, btnClass } = this.props;
    return (
      <div
        className="dropdown-wrapper"
        onMouseEnter={() => this.setState({ activeDropDown: true })}
        onMouseLeave={() => this.setState({ activeDropDown: false })}
      >
        <Button test={btnTest} text={btnText} btnClass={btnClass} />
        <div
          className={activeDropDown ? 'dropdown show' : 'dropdown hide'}
          style={{ width: '500px' }}
        >
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
        </div>
      </div>
    );
  }
}

export default connect()(PriceInput);
