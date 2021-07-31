import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminDeletePanel } from '../../../components';
import MainActions from '../../actions/mainActions';

class AdminDeletePanelContainer extends Component {

  componentDidMount () {
    const { fetchParts } = this.props;
    fetchParts()
  }

  render () {
    return (
      <AdminDeletePanel {...this.props}/>
    )
  }
}

export default connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(AdminDeletePanelContainer)
