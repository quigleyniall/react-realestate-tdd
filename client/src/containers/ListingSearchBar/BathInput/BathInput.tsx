import React from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/Button';
import '../ListingSearchBar.scss';

interface IProps {
  btnTest: string;
  btnText: string;
  btnClass: string;
  click: (param: any) => any;
}

interface IState {
  activeDropDown: boolean;
  type: string;
}

class BathInput extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      activeDropDown: false,
      type: ''
    };
  }

  setType = (type: string) => () => {
    this.setState({ type, activeDropDown: false });
  };

  render() {
    const { activeDropDown } = this.state;
    const { btnTest, btnText, btnClass, click } = this.props;
    return (
      <div
        className="dropdown-wrapper"
        onMouseEnter={() => this.setState({ activeDropDown: true })}
        onMouseLeave={() => this.setState({ activeDropDown: false })}
      >
        <Button test={btnTest} text={btnText} btnClass={btnClass} />
        <div
          className={activeDropDown ? 'dropdown show' : 'dropdown hide'}
          style={{ width: '300px' }}
        >
          <div className="p-4">
            <p>Bathrooms</p>
            <div className="d-flex">
              <Button test="one-bath" text="1+" onPress={click('1')} />
              <Button test="two-bath" text="2+" onPress={click('1')} />
              <Button test="three-bath" text="3+" onPress={click('1')} />
              <Button test="four-bath" text="4+" onPress={click('1')} />
              <Button test="five-bath" text="5+" onPress={click('1')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(BathInput);
