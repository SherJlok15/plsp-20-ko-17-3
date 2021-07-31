import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from '../../../App';
import MainActions from '../../actions/mainActions';

class AppShellContainer extends Component {

  render () {
    return (
      <App {...this.props}/>
    )
  }
}

export default withRouter(connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(AppShellContainer))
