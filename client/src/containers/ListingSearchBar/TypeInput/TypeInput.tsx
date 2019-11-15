import React from 'react';
import Button from '../../../components/Button';
import '../ListingSearchBar.scss';

interface IProps {
  btnTest: string;
  btnText?: string;
  btnClass: string;
  click: (param: any) => any;
}

interface IState {
  activeDropDown: boolean;
  type: string;
}

class TypeInput extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      activeDropDown: false,
      type: ''
    };
  }

  render() {
    const { activeDropDown } = this.state;
    const { btnTest, btnClass, btnText, click } = this.props;
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
          <ul className="list-group">
            <li className="list-group-item" onClick={click('buy')}>
              Buy
            </li>
            <li className="list-group-item" onClick={click('rent')}>
              Rent
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TypeInput;
