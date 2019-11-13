import React from 'react';
import { connect } from 'react-redux';
import { IListing } from '../../interfaces'
import Listing from '../../components/Listing';

interface IProps {
  listings: IListing[];
}

export class UnconnectedPropertyListing extends React.Component<IProps> {
  renderSearchResults = () => {
    const { listings } = this.props;
    if (listings.length === 0) {
      return <div data-test="no-results">No Results Found!</div>;
    }
    return listings.map(listing => (
      <Listing key={listing.img_url} listing={listing} />
    ))
  }
  
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

const mapStateToProps = ({ listings }) => ({ listings });

export default connect(mapStateToProps, null)(UnconnectedPropertyListing);