import React from 'react';
import { connect } from 'react-redux';
import ListingSearchBar from '../../containers/ListingSearchBar';
import PropertyListing from '../../containers/PropertyListings';
import { searchListings } from '../../store/actions';
import { StoreState } from '../../store/rootReducer';
import { ListingResponse } from '../../interfaces';
import history from '../../router/history';

interface IProps {
  match: { params: { type: string; location: string } };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store?: any;
  listings: ListingResponse[];
  searchListings: Function;
}

interface IState {
  location: string;
  type: string;
}

export class UnconnectedListings extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      location: '',
      type: ''
    };
  }
  async componentDidMount() {
    const { type, location } = this.props.match.params;
    const { searchListings } = this.props;
    searchListings(type, location);
    this.setState({ type, location });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ location: event.currentTarget.value });
  };

  handleSearch = async () => {
    const { type, location } = this.state;
    const { searchListings } = this.props;
    await searchListings(type, location);
    history.push(`/listings/${type}/${location}`);
  };

  render() {
    const { location } = this.state;
    return (
      <div>
        <ListingSearchBar
          data-test="listing-search-input"
          handleChange={this.handleChange}
          location={location}
          onPress={this.handleSearch}
        />
        <PropertyListing data-test="property-listings" />
      </div>
    );
  }
}

const mapStateToProps = ({
  listings
}: StoreState): { listings: ListingResponse[] } => ({ listings });

export default connect(mapStateToProps, { searchListings })(
  UnconnectedListings
);
