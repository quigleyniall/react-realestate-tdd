import React from 'react';
import Button from '../Button';
import './dropdown.scss';

interface IProps {
  btnTest: string;
  btnText: string;
  btnClass: string;
  render: any;
}

interface IState {
  activeDropDown: boolean;
  btnText: string;
}

class DropDown extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      activeDropDown: false,
      btnText: ''
    };
  }

  UNSAFE_componentWillMount() {
    this.setState({ btnText: this.props.btnText });
  }

  changeBtnText = (type: string) => {
    this.setState({ btnText: type });
  };

  openDropDown = () => {
    this.setState({ activeDropDown: true });
  };

  closeDropDown = () => {
    this.setState({ activeDropDown: false });
  };

  render() {
    const { activeDropDown, btnText } = this.state;
    const { btnTest, btnClass } = this.props;
    return (
      <div
        className="dropdown-wrapper"
        onMouseEnter={this.openDropDown}
        onMouseLeave={this.closeDropDown}
      >
        <Button test={btnTest} text={btnText} btnClass={btnClass} />
        <div
          className={activeDropDown ? 'dropdown show' : 'dropdown hide'}
          style={{ width: '300px' }}
        >
          {this.props.render({
            closeDropDown: this.closeDropDown,
            changeBtnText: this.changeBtnText
          })}
        </div>
      </div>
    );
  }
}

export default DropDown;
