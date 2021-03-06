import React from 'react';
import SearchBar from '../../containers/SearchBar';
import PropertyType from '../../components/PropertyType';
import { propertyTypeInfo } from '../../utils/propertyTypeInfo';
import { Property } from '../../interfaces';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './Home.scss';

const Home = () => {
  return (
    <div data-test="app" className="wrapper">
      <Nav data-test="nav" />
      <div className="d-flex background align-items-center">
        <SearchBar data-test="search-bar" />
      </div>
      <div className="container p-5">
        <h2 className="text-center">
          <strong>We have the most listings and constant updates.</strong>
        </h2>
        <h2 className="text-center">
          <strong>So you’ll never miss out.</strong>
        </h2>
      </div>
      <div
        data-test="card-container"
        className="container pb-5 d-flex justify-content-between"
      >
        {propertyTypeInfo.map((property: Property) => (
          <PropertyType
            key={property.title}
            title={property.title}
            desc={property.desc}
            image={property.image}
            onPress={property.onPress}
            buttonText={property.buttonText}
          />
        ))}
      </div>
      <Footer data-test="footer" />
    </div>
  );
};

export default Home;
