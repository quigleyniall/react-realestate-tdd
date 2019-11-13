import React from 'react';
import { connect } from 'react-redux';
import { searchListings } from '../../store/actions';
import history from '../../router/history';
import Button from '../../components/Button';

interface IProps {
  searchListings: Function;
}

interface IState {
  location: string;
  listingType: string;
}

export class UnconnectedSearchBar extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      listingType: 'rent'
    };
  }

  handleChange = e => {
    this.setState({ location: e.target.value });
  };

  handleSubmit = async () => {
    const { listingType, location } = this.state;
    // await this.props.searchListings(listingType, location);
    // this.setState({ location: '' });
    history.push(`/listings/${listingType}/${location}`);
  };

  render() {
    const { location, listingType } = this.state;
    return (
      <div className="container">
        <h2 className="text-light text-center" style={{ fontSize: '4rem' }}>
          Reimagine Home
        </h2>
        <h5 className="text-light text-center mb-4">
          We&apos;ll help you fnd a place you will love
        </h5>
        <div
          data-test="search-form"
          className="row justify-content-center align-items-center"
        >
          <div className="btn-group btn-group-lg" role="group">
            <Button
              data-test="rent-button"
              test="rent"
              btnClass="primary"
              active={listingType === 'rent'}
              onPress={() => this.setState({ listingType: 'rent' })}
              text="rent"
            />
            <Button
              data-test="buy-button"
              test="buy"
              btnClass="primary"
              active={listingType === 'buy'}
              onPress={() => this.setState({ listingType: 'buy' })}
              text="buy"
            />
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-9 border p-3">
            <input
              data-test="search-bar"
              type="text"
              className="form-control"
              onChange={this.handleChange}
              name="location"
              placeholder="Search UK listing"
              value={location}
            />
          </div>
          <div className="col-auto">
            <Button
              data-test="search-button"
              test="search"
              btnClass="primary"
              onPress={this.handleSubmit}
              text="Search"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { searchListings })(UnconnectedSearchBar);
