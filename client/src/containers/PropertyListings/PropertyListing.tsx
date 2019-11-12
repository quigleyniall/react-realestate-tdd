import React from 'react';
import { connect } from 'react-redux';
import { IListing } from '../../interfaces'

interface IProps {
  listings: [IListing];
}

export class UnconnectedPropertyListing extends React.Component<IProps> {
  render() {
    return (
      <div>Hello World</div>
    );
  }
}

const mapStateToProps = ({ listings }) => ({ listings });

export default connect(mapStateToProps, null)(UnconnectedPropertyListing);