import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomePage } from '../../../components';
import MainActions from '../../actions/mainActions';

class HomePageContainer extends Component {

  componentDidMount() {
    const { fetchUsers, fetchNews, fetchParts } = this.props;
    fetchUsers();
    fetchParts();
    fetchNews();
  }

  render () {
    return (
      <HomePage {...this.props}/>
    )
  }
}

export default connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(HomePageContainer)
