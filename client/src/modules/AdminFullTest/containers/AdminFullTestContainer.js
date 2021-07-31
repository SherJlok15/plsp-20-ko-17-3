import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminFullTest } from '../../../components';
import MainActions from '../../actions/mainActions';

class AdminFullTestContainer extends Component {

  render () {
    return (
      <AdminFullTest {...this.props}/>
    )
  }
}

export default connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(AdminFullTestContainer)
