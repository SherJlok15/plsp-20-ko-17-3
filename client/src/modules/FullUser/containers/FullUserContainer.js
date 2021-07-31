import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FullUser } from '../../../components';
import MainActions from '../../actions/mainActions';

class FullUserContainer extends Component {

  componentDidMount() {
    const { fetchParts } = this.props;
    fetchParts()
  }

  render () {
    return (
      <FullUser {...this.props}/>
    )
  }
}

export default connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(FullUserContainer)
