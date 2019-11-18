import React from 'react';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { reduxForm, Field, change } from 'redux-form';
import queryString from 'query-string';
import Button from '../../components/Button';
import { searchListings } from '../../store/actions';
import TypeInput from './TypeInput/TypeInput';
import PriceInput from './PriceInput/PriceInput';
import BathInput from './BathInput/BathInput';
import BedInput from './BedInput/BedInput';

interface IProps {
  match?: { params: { type: string; location: string } };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchListings: Function;
  change?: any;
  location?: { search: string };
  handleSubmit?: any;
  store?: any;
}

export class UnconnectedListingSearchBar extends React.Component<IProps> {
  componentDidMount() {
    const { type, location } = this.props.match.params;
    const values = queryString.parse(this.props.location.search);
    const { searchListings } = this.props;

    this.props.change('searchbar', 'location', location);
    this.props.change('searchbar', 'type', type);
    this.props.change('searchbar', 'priceMin', values.priceMin);
    this.props.change('searchbar', 'priceMax', values.priceMax);
    this.props.change('searchbar', 'bedMin', values.bedMin);
    this.props.change('searchbar', 'bedMax', values.bedMax);
    this.props.change('searchbar', 'bathMax', values.bathMax);
    this.props.change('searchbar', 'bathMin', values.bathMin);

    const req = {
      location,
      type,
      priceMin: values.priceMin ? values.priceMin : 0,
      priceMax: values.priceMax ? values.priceMax : 1000000000,
      bedMin: values.bedMin ? values.bedMin : 0,
      bedMax: values.bedMax ? values.bedMax : 20,
      bathMax: values.bathMax ? values.bathMax : 20,
      bathMin: values.bathMin ? values.bathMin : 0
    };
    searchListings(req);
  }

  submit = values => {
    const { searchListings } = this.props;
    searchListings(values);
  };

  render() {
    const { type } = this.props.match.params;
    const { handleSubmit } = this.props;
    const values = queryString.parse(this.props.location.search);
    return (
      <form
        className="d-flex mt-2 mb-2 p-2 border-top border-bottom"
        onSubmit={handleSubmit(this.submit)}
      >
        <div className="col-md-4">
          <Field
            data-test="listing-search-input"
            name="location"
            component="input"
            type="text"
            placeholder="Location"
            className="mr-2 form-control"
          />
        </div>
        <Field
          name="type"
          component={props => (
            <TypeInput
              btnClass="btn"
              btnTest="type"
              btnText={type}
              click={param => props.input.onChange(param)}
            />
          )}
        />
        <PriceInput btnClass="btn" btnTest="type" btnText="Price" />
        <Field
          name="bedrooms"
          component={props => (
            <BedInput
              btnClass="btn"
              btnTest="type"
              btnText="Bedrooms"
              urlMin={values.bedMin ? values.bedMin.toString() : ''}
              urlMax={values.bedMax ? values.bedMax.toString() : ''}
              click={param => props.input.onChange(param)}
            />
          )}
        />
        <Field
          name="bathrooms"
          component={props => (
            <BathInput
              btnClass="btn"
              btnTest="type"
              btnText="Bathrooms"
              urlMin={values.bathMin ? values.bathMin.toString() : ''}
              urlMax={values.bathMax ? values.bathMax.toString() : ''}
              click={param => props.input.onChange(param)}
            />
          )}
        />
        <Button
          data-test="listing-search"
          test="listing-search"
          text="Search"
          btnClass="primary"
          type="submit"
        />
      </form>
    );
  }
}

export const ReduxForm = reduxForm({
  form: 'searchbar'
})(UnconnectedListingSearchBar);

export const TestListingSearchBar = connect(null, { searchListings, change })(
  ReduxForm
);

export default reduxForm({
  form: 'searchbar'
})(
  compose(
    withRouter,
    connect(null, { searchListings, change })
  )(UnconnectedListingSearchBar)
);
