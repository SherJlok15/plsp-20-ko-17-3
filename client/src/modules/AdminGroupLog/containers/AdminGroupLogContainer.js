import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminGroupLog } from '../../../components';
import MainActions from '../../actions/mainActions';

class AdminGroupLogContainer extends Component {

  componentDidMount() {
    const { fetchUsers, fetchParts, aGroupLogClearPage } = this.props;
    aGroupLogClearPage();
    fetchParts();
    fetchUsers();
  }

  render () {
    return (
      <AdminGroupLog {...this.props}/>
    )
  }
}

export default connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(AdminGroupLogContainer)
