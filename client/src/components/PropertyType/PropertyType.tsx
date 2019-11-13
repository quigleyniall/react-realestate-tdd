import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Property } from '../../interfaces';

const PropertyType = (props: Property) => (
  <div className="card text-center mb-5" style={{ width: '20rem' }}>
    <img src={props.image} className="card-img-top" alt={props.image} />
    <div className="card-body">
      <h5 data-test="title" className="card-title">
        {props.title}
      </h5>
      <p data-test="desc" className="card-text">
        {props.desc}
      </p>
      <Button
        data-test="card-button"
        test="card"
        onPress={props.onPress}
        text={props.buttonText}
        btnClass="primary"
      />
    </div>
  </div>
);

PropertyType.propTypes = {
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default PropertyType;
