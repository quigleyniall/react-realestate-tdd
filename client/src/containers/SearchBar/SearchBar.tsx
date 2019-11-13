import React from 'react';
import { connect } from 'react-redux';
import { searchListings } from '../../store/actions';

interface IProps {
  searchListings: Function;
}

interface IState {
  location: string;
  listingType: string
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
    await this.props.searchListings(listingType, location);
    this.setState({ location: '' });    
  };

  render() {
    const { location, listingType } = this.state;
    return (
        <div data-test="search-form">
          <div className="row justify-content-center">
            <div className="btn-group btn-group-lg" role="group">
              <button 
              type="button"
              data-test="rent-button"
              className={listingType === 'rent' ? (
                "btn btn-outline-primary border active") : ("btn btn-outline-primary border")
              }
              onClick={() => this.setState({ listingType: 'rent'})}>
                Rent
              </button>
              <button 
              type="button" 
              data-test="buy-button"
              className={listingType === 'buy' ? (
                "btn btn-outline-primary border active") : ("btn btn-outline-primary border")
              }
              onClick={() => this.setState({ listingType: 'buy'})}>
                Buy
              </button>
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
            <button
              data-test="search-button"
              className="btn btn-primary"
              onClick={this.handleSubmit}
              type="button"
            >
              Search
            </button>
          </div>
          </div>
        </div>
    );
  }
}

export default connect(null, { searchListings })(UnconnectedSearchBar);
