import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Parts } from '../../../components';
import MainActions from '../../actions/mainActions';

class PartsContainer extends Component {

  componentDidMount () {
    const { fetchParts, clearPart } = this.props;
    clearPart();
    fetchParts();
  }

  render () {
    return (
      <Parts {...this.props}/>
    )
  }
}

export default connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(PartsContainer);
