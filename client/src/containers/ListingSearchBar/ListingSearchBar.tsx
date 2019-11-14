import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

interface IProps {
  handleChange: any;
  location: string;
  onPress: () => void;
}

const ListingSearchBar = (props: IProps) => (
  <div>
    <input
      type="text"
      onChange={props.handleChange}
      name="location"
      value={props.location}
    />
    <Button
      test="listing-search"
      text="Search"
      btnClass="primary"
      onPress={props.onPress}
    />
  </div>
);

ListingSearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default ListingSearchBar;
