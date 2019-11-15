import React from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/Button';
import '../ListingSearchBar.scss';

interface IProps {
  btnTest: string;
  btnText: string;
  btnClass: string;
  click: (param: any) => any;
  urlBedMin: string;
  urlBedMax: string;
}

interface IState {
  activeDropDown: boolean;
  type: string;
  exact: boolean;
  bed: string;
}

class BedInput extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      activeDropDown: false,
      type: '',
      exact: false,
      bed: ''
    };
  }

  componentDidMount() {
    const { urlBedMax, urlBedMin, click } = this.props;
    if (urlBedMin !== urlBedMax) {
      click(`${urlBedMin}+`);
      return this.setState({ bed: `${urlBedMin}+` });
    }

    click(`${urlBedMin}`);
    return this.setState({ bed: `${urlBedMin}`, exact: true });
  }

  setBeds = (bed: string) => {
    const { click } = this.props;
    click(bed);
    this.setState({ bed });
  };

  render() {
    const { activeDropDown, exact, bed } = this.state;
    const { btnTest, btnText, btnClass } = this.props;
    return (
      <div
        className="dropdown-wrapper"
        onMouseEnter={() => this.setState({ activeDropDown: true })}
        onMouseLeave={() => this.setState({ activeDropDown: false })}
      >
        <Button
          test={btnTest}
          text={bed.length ? `${btnText} ${bed}` : btnText}
          btnClass={btnClass}
        />
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
                onPress={() => this.setBeds(exact ? '1' : '1+')}
              />
              <Button
                test="two-bed"
                text={exact ? '2' : '2+'}
                onPress={() => this.setBeds(exact ? '2' : '2+')}
              />
              <Button
                test="three-bed"
                text={exact ? '3' : '3+'}
                onPress={() => this.setBeds(exact ? '3' : '3+')}
              />
              <Button
                test="four-bed"
                text={exact ? '4' : '4+'}
                onPress={() => this.setBeds(exact ? '4' : '4+')}
              />
              <Button
                test="five-bed"
                text={exact ? '5' : '5+'}
                onPress={() => this.setBeds(exact ? '5' : '5+')}
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
