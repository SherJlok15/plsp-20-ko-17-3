import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AdminAddTest } from '../../../components';
import MainActions from '../../actions/mainActions';

class AdminAddTestContainer extends Component {

  componentDidMount () {
    const { fetchParts, addTestClearFormAfterTestPost } = this.props;
    addTestClearFormAfterTestPost()
    fetchParts()
  }

  render () {
    return (
      <AdminAddTest {...this.props}/>
    )
  }
}

export default withRouter(connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(AdminAddTestContainer))
