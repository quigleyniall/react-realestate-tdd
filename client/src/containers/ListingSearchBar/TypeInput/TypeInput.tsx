import React from 'react';
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
  btnText: string;
}

class TypeInput extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      activeDropDown: false,
      btnText: ''
    };
  }

  componentDidMount() {
    this.setState({ btnText: this.props.btnText });
  }

  setType = (type: string) => {
    const { click } = this.props;
    this.setState({ activeDropDown: false, btnText: type });
    click(type);
  };

  render() {
    const { activeDropDown, btnText } = this.state;
    const { btnTest, btnClass } = this.props;
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
            <li className="list-group-item" onClick={() => this.setType('buy')}>
              Buy
            </li>
            <li
              className="list-group-item"
              onClick={() => this.setType('rent')}
            >
              Rent
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TypeInput;
