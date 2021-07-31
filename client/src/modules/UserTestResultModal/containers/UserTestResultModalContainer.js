import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { UserTestResultModal } from '../../../components';
import MainActions from '../../actions/mainActions';

class UserTestResultModalContainer extends Component {

  render () {
    return (
      <UserTestResultModal {...this.props}/>
    )
  }
}

export default withRouter(connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(UserTestResultModalContainer));
