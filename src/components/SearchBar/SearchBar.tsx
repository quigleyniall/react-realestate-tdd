import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {};

  render() {
    return (
      <div data-test="search-form" className="form-row">
        <div className="form-group col-md-9">
          <input
            data-test="search-bar"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            name="location"
          />
        </div>
        <div className="form-group col">
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
    );
  }
}

export default SearchBar;
