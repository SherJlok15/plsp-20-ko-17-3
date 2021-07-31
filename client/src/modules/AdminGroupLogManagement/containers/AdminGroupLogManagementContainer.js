import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminGroupLogManagement } from '../../../components';
import MainActions from '../../actions/mainActions';

class AdminGroupLogManagementContainer extends Component {

  componentDidMount() {
    const { fetchUsers, aGroupLogMNGClearPage } = this.props;
    aGroupLogMNGClearPage();
    fetchUsers();
  }

  render () {
    return (
      <AdminGroupLogManagement {...this.props}/>
    )
  }
}

export default connect(
  ({ mainReducer }) => mainReducer,
  MainActions
)(AdminGroupLogManagementContainer)
