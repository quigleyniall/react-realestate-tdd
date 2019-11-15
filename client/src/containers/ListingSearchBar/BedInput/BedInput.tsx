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
  exact: boolean;
}

class BedInput extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      activeDropDown: false,
      type: '',
      exact: false
    };
  }

  render() {
    const { activeDropDown, exact } = this.state;
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
            <p>Bedrooms</p>
            <div className="d-flex">
              <Button
                test="one-bed"
                text={exact ? '1' : '1+'}
                onPress={click(exact ? '1' : '1+')}
              />
              <Button
                test="two-bed"
                text={exact ? '2' : '2+'}
                onPress={click(exact ? '2' : '2+')}
              />
              <Button
                test="three-bed"
                text={exact ? '3' : '3+'}
                onPress={click(exact ? '3' : '3+')}
              />
              <Button
                test="four-bed"
                text={exact ? '4' : '4+'}
                onPress={click(exact ? '4' : '4+')}
              />
              <Button
                test="five-bed"
                text={exact ? '5' : '5+'}
                onPress={click(exact ? '5' : '5+')}
              />
            </div>
            <Button
              test="exact-bed"
              text="Exact"
              onPress={() =>
                this.setState(prevState => ({ exact: !prevState.exact }))
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(BedInput);
