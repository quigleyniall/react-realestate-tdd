import React from 'react';
import Listing from '../../Listing';
import { ListingResponse } from '../../../interfaces';

interface Marker {
  lat: number;
  lng: number;
  listing: ListingResponse;
  activeListing: ListingResponse | boolean;
  setActiveListing: Function;
}

export const Marker: React.FC<Marker> = ({
  listing,
  activeListing,
  setActiveListing
}: Marker) => (
  <div
    className={listing === activeListing ? 'circle' : 'circle z-index-low'}
    role="presentation"
    onMouseEnter={() => setActiveListing(listing)}
    onMouseLeave={() => setActiveListing({})}
  >
    {listing === activeListing ? (
      <Listing listing={listing} setActiveListing={setActiveListing} />
    ) : null}
  </div>
);
