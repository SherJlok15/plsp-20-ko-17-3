import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminPage } from '../../../components';
import MainActions from '../../actions/mainActions';

class AdminPageContainer extends Component {

  render () {
    return (
      <AdminPage {...this.props}/>
    )
  }
}

export default connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(AdminPageContainer)
