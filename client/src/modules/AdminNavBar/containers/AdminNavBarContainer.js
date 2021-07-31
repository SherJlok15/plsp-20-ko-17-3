import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminNavBar } from '../../../components';
import MainActions from '../../actions/mainActions';

class AdminNavBarContainer extends Component {

  render () {
    return (
      <AdminNavBar {...this.props}/>
    )
  }
}

export default connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(AdminNavBarContainer)
