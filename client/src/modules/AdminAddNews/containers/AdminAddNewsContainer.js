import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AdminAddNews } from '../../../components';
import MainActions from '../../actions/mainActions';

class AdminAddNewsContainer extends Component {

  componentDidMount () {
    const { fetchNews } = this.props;
    fetchNews();
  }

  render () {
    return (
      <AdminAddNews {...this.props}/>
    )
  }
}

export default withRouter(connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(AdminAddNewsContainer))
