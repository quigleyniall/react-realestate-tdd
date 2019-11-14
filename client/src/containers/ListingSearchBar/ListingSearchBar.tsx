import React from 'react';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import DropDown from '../../components/DropDown';
import { searchListings } from '../../store/actions';
import history from '../../router/history';

interface IState {
  activeDropDown: string;
  type: string;
  [x: string]: string;
}

interface IProps {
  match?: { params: { type: string; location: string } };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store?: any;
  searchListings: Function;
}

export class UnconnectedListingSearchBar extends React.Component<
  IProps,
  IState
> {
  constructor(props) {
    super(props);
    this.state = {
      activeDropDown: '',
      type: 'rent'
    };
  }

  componentDidMount() {
    const { type, location } = this.props.match.params;
    const { searchListings } = this.props;
    searchListings(type, location);
    this.setState({ type, location });
  }

  setType = (type: string) => {
    this.setState({ type });
  };

  renderAdditionalInputs = () => {
    const { activeDropDown } = this.state;
    return (
      <div style={{ position: 'relative' }}>
        <Button
          test="listing-search"
          text="Search"
          btnClass="primary"
          onPress={() => this.setState({ activeDropDown: 'listing' })}
        />
        <DropDown
          type="dropDownList"
          data={['buy', 'rent']}
          display={activeDropDown === 'listing'}
          click={this.setType}
        />
      </div>
    );
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.currentTarget.value });
  };

  handleSearch = async () => {
    const { listingType, location } = this.state;
    const { searchListings } = this.props;
    await searchListings(listingType, location);
    history.push(`/listings/${listingType}/${location}`);
  };

  render() {
    const { location } = this.state;
    return (
      <div className="d-flex mt-2 mb-2 p-2 border-top border-bottom">
        <div className="col-md-4">
          <input
            type="text"
            data-test="listing-search-input"
            onChange={this.handleChange}
            name="location"
            value={location}
            className="mr-2 form-control"
          />
        </div>
        {this.renderAdditionalInputs()}
        <Button
          test="listing-search"
          text="Search"
          btnClass="primary"
          onPress={this.handleSearch}
        />
      </div>
    );
  }
}

export const TestListingSearchBar = connect(null, { searchListings })(
  UnconnectedListingSearchBar
);

export default compose(
  withRouter,
  connect(null, { searchListings })
)(UnconnectedListingSearchBar);
