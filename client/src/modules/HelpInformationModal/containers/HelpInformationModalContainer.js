import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { HelpInformationModal } from '../../../components';
import MainActions from '../../actions/mainActions';

class HelpInformationModalContainer extends Component {

  render () {
    return (
      <HelpInformationModal {...this.props}/>
    )
  }
}

export default withRouter(connect(
  ({ mainReducer }) => mainReducer,
  MainActions
)(HelpInformationModalContainer))
