import React from 'react';
import Button from '../../../components/Button';

interface IProps {
  click: (param: any) => any;
  urlMin: string;
  urlMax: string;
  changeBtnText: any;
}

interface IState {
  exact: boolean;
}

class BedDropdown extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      exact: false
    };
  }

  componentDidMount() {
    const { urlMax, urlMin, click, changeBtnText } = this.props;
    if (urlMin !== urlMax) {
      click(`${urlMin}+`);
      changeBtnText(`Bedrooms ${urlMin}+`);
    } else {
      click(`${urlMin}`);
      changeBtnText(`Bedrooms ${urlMin}`);
    }
  }

  setBeds = (beds: string) => {
    const { click, changeBtnText } = this.props;
    click(beds);
    changeBtnText(`Bedrooms ${beds}`);
  };

  render() {
    const { exact } = this.state;
    return (
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
    );
  }
}

export default BedDropdown;
