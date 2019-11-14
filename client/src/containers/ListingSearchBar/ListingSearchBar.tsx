import React from 'react';
import PropTypes from 'prop-types';

interface IProps {
  handleChange: any;
  location: string;
}

const ListingSearchBar = (props: IProps) => (
  <div>
    <input
      type="text"
      onChange={props.handleChange}
      name="location"
      value={props.location}
    />
  </div>
);

ListingSearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
};

export default ListingSearchBar;
