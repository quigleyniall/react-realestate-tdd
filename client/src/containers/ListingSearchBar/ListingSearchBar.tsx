import React from 'react';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { reduxForm, Field, change } from 'redux-form';
import Button from '../../components/Button';
import { searchListings } from '../../store/actions';
import history from '../../router/history';
import TypeInput from './TypeInput/TypeInput';
import PriceInput from './PriceInput/PriceInput';
import BedInput from './BedInput/BedInput';
import BathInput from './BathInput/BathInput';
import { StoreState } from '../../store/rootReducer';

interface IState {
  activeDropDown: string;
  type: string;
  [x: string]: string;
}

interface IProps {
  match?: { params: { type: string; location: string } };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store?: any;
  searchListings: Function;
  listingType: string;
  setFormValues: Function;
  form: any;
  dispatch: any;
  initialValues?: any;
  setInitialValues: any;
  initialize: any;
}

export class UnconnectedListingSearchBar extends React.Component<
  IProps,
  IState
> {
  constructor(props) {
    super(props);
    this.state = {
      activeDropDown: '',
      type: 'rent'
    };
  }

  componentDidMount() {
    const { type, location } = this.props.match.params;
    const { searchListings } = this.props;

    // this.props.initialize({ location });
    this.props.dispatch(change('searchbar', 'location', location));
    this.props.dispatch(change('searchbar', 'type', type));
    this.props.dispatch(change('searchbar', 'priceMin', '0'));
    this.props.dispatch(change('searchbar', 'priceMax', '1000000'));
    searchListings();
  }

  handleSearch = async () => {
    const { searchListings } = this.props;
    searchListings();
  };

  render() {
    const { type } = this.props.match.params;
    return (
      <form className="d-flex mt-2 mb-2 p-2 border-top border-bottom">
        <div className="col-md-4">
          <Field
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
          name="Bedrooms"
          component={props => (
            <BedInput
              btnClass="btn"
              btnTest="type"
              btnText="Bedrooms"
              click={param => props.input.onChange(param)}
            />
          )}
        />
        <Field
          name="Bathrooms"
          component={props => (
            <BathInput
              btnClass="btn"
              btnTest="type"
              btnText="Bathrooms"
              click={param => props.input.onChange(param)}
            />
          )}
        />
        <Button
          test="listing-search"
          text="Search"
          btnClass="primary"
          onPress={this.handleSearch}
        />
      </form>
    );
  }
}

// export const TestListingSearchBar = connect(mapStateToProps, {
//   searchListings,
//   setListingType
// })(UnconnectedListingSearchBar);

const ReduxForm = reduxForm({
  form: 'searchbar'
})(UnconnectedListingSearchBar);

export default compose(
  withRouter,
  connect(null, { searchListings })
)(ReduxForm);
