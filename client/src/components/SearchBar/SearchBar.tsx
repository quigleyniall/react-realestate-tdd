import React from 'react';
import { connect } from 'react-redux';
import { searchListings } from '../../store/actions';

interface SearchBarProps {
  searchListings: Function;
}

class SearchBar extends React.Component<SearchBarProps> {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async () => {
    const location = this.state;
    this.props.searchListings(location);
  };

  render() {
    return (
      <div className="container">
        <div data-test="search-form" className="row justify-content-md-center">
          <div className="form-group col-md-9">
            <input
              data-test="search-bar"
              type="text"
              className="form-control"
              onChange={this.handleChange}
              name="location"
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

export default connect(null, { searchListings })(SearchBar);
