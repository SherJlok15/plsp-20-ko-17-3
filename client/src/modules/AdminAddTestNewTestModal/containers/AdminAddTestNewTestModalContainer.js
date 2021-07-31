import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AdminAddTestNewTestModal } from '../../../components';
import MainActions from '../../actions/mainActions';

class AdminAddTestNewTestModalContainer extends Component {

  render () {
    return (
      <AdminAddTestNewTestModal {...this.props}/>
    )
  }
}

export default withRouter(connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(AdminAddTestNewTestModalContainer))
