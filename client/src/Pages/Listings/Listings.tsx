import React from 'react';
import { connect } from 'react-redux';
import ListingSearchBar from '../../containers/ListingSearchBar';
import PropertyListing from '../../containers/PropertyListings';
import { searchListings } from '../../store/actions';
import { StoreState } from '../../store/rootReducer';
import { ListingResponse } from '../../interfaces';

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

  render() {
    const { location } = this.state;
    return (
      <div>
        <ListingSearchBar
          data-test="listing-search-input"
          handleChange={this.handleChange}
          location={location}
        />
        <PropertyListing />
      </div>
    );
  }
}

const mapStateToProps = ({ listings }: StoreState) => ({ listings });

export default connect(mapStateToProps, { searchListings })(
  UnconnectedListings
);
