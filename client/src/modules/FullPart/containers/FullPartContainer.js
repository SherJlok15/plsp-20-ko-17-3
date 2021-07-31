import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FullPart } from '../../../components';
import MainActions from '../../actions/mainActions';

class FullPartContainer extends Component {
  componentDidMount () {
    const { match, fetchPart, user_started_test, clearApp } = this.props;

    fetchPart(match.params.id)
    if (user_started_test) {
      clearApp()
    }
  }

  render () {
    return (
      <FullPart {...this.props}/>
    )
  }
}

export default withRouter(connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(FullPartContainer))
