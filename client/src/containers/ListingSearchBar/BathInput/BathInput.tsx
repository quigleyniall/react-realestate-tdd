import React from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/Button';
import '../ListingSearchBar.scss';

interface IProps {
  btnTest: string;
  btnText: string;
  btnClass: string;
  click: (param: any) => any;
  urlBathMin: string;
  urlBathMax: string;
}

interface IState {
  activeDropDown: boolean;
  type: string;
  exact: boolean;
  bath: string;
}

class BathInput extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      activeDropDown: false,
      type: '',
      exact: false,
      bath: ''
    };
  }

  componentDidMount() {
    const { urlBathMax, urlBathMin, click } = this.props;
    if (urlBathMin !== urlBathMax) {
      click(`${urlBathMin}+`);
      return this.setState({ bath: `${urlBathMin}+` });
    }

    click(`${urlBathMin}`);
    return this.setState({ bath: `${urlBathMin}`, exact: true });
  }

  setBaths = (bath: string) => {
    const { click } = this.props;
    click(bath);
    this.setState({ bath });
  };

  render() {
    const { activeDropDown, exact, bath } = this.state;
    const { btnTest, btnText, btnClass } = this.props;
    return (
      <div
        className="dropdown-wrapper"
        onMouseEnter={() => this.setState({ activeDropDown: true })}
        onMouseLeave={() => this.setState({ activeDropDown: false })}
      >
        <Button
          test={btnTest}
          text={bath.length ? `${btnText} ${bath}` : btnText}
          btnClass={btnClass}
        />
        <div
          className={activeDropDown ? 'dropdown show' : 'dropdown hide'}
          style={{ width: '300px' }}
        >
          <div className="p-4">
            <p>Bathrooms</p>
            <div className="d-flex">
              <Button
                test="one-bath"
                text={exact ? '1' : '1+'}
                onPress={() => this.setBaths(exact ? '1' : '1+')}
              />
              <Button
                test="two-bath"
                text={exact ? '2' : '2+'}
                onPress={() => this.setBaths(exact ? '2' : '2+')}
              />
              <Button
                test="three-bath"
                text={exact ? '3' : '3+'}
                onPress={() => this.setBaths(exact ? '3' : '3+')}
              />
              <Button
                test="four-bath"
                text={exact ? '4' : '4+'}
                onPress={() => this.setBaths(exact ? '4' : '4+')}
              />
              <Button
                test="five-bath"
                text={exact ? '5' : '5+'}
                onPress={() => this.setBaths(exact ? '5' : '5+')}
              />
            </div>
            <Button
              test="exact-bath"
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

export default connect()(BathInput);
