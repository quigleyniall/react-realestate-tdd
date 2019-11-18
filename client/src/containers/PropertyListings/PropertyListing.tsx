import React from 'react';
import { connect } from 'react-redux';
import { ListingResponse } from '../../interfaces';
import Listing from '../../components/Listing';
import { StoreState } from '../../store/rootReducer';
import { selectListing } from '../../store/actions';

interface IProps {
  listings: ListingResponse[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store?: any;
  selectListing: Function;
}

export class UnconnectedPropertyListing extends React.Component<IProps> {
  renderSearchResults = () => {
    const { listings, selectListing } = this.props;
    if (listings.length === 0) {
      return <div data-test="no-results">No Results Found!</div>;
    }
    return listings.map(listing => (
      <Listing
        key={listing.img_url}
        listing={listing}
        setActiveListing={selectListing}
      />
    ));
  };

  render() {
    return (
      <div data-test="listing-results" className="container">
        <div className="row d-flex justify-content-between">
          {this.renderSearchResults()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ listings }: StoreState) => ({
  listings
});

export default connect(mapStateToProps, { selectListing })(
  UnconnectedPropertyListing
);
