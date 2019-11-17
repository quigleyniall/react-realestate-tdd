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
      exact: false,
    };
  }

  componentDidMount() {
    const { urlMax, urlMin, click, changeBtnText } = this.props;
    if (urlMin !== urlMax) {
      click(`${urlMin}+`);
      changeBtnText(`Bathrooms ${urlMin}+`);
    } else {      
      click(`${urlMin}`);
      changeBtnText(`Bathrooms ${urlMin}`);
    }
  }

  setBaths = (baths: string) => {
    const { click, changeBtnText } = this.props;
    click(baths);
    changeBtnText(`Bathrooms ${baths}`)
  }

  render() {
    const { exact } = this.state;
    return (
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
              test="exact-bed"
              text="Exact"
              onPress={() =>
                this.setState(prevState => ({ exact: !prevState.exact }))
              }
            />
          </div>
    )
  
  }
}

export default BedDropdown;
