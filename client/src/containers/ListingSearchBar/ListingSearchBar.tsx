import React from 'react';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Button from '../../components/Button';
import { searchListings, setFormValues } from '../../store/actions';
import history from '../../router/history';
import TypeInput from './TypeInput/TypeInput';
import PriceInput from './PriceInput/PriceInput';
import BedInput from './BedInput/BedInput';
import BathInput from './BathInput/BathInput';

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
    const { searchListings, setFormValues } = this.props;
    setFormValues({ location });
    searchListings(location);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.currentTarget.value });
  };

  handleSearch = async () => {
    const { location } = this.state;
    await searchListings(location);
  };

  render() {
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
              btnText="Type"
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

const mapStateToProps = ({ setInitialValues }) => ({
  initialValues: setInitialValues.data
});

// export const TestListingSearchBar = connect(mapStateToProps, {
//   searchListings,
//   setListingType
// })(UnconnectedListingSearchBar);

export default compose(
  withRouter,
  connect(mapStateToProps, { searchListings, setFormValues }),
  reduxForm({
    form: 'searchbar'
  })
)(UnconnectedListingSearchBar);
