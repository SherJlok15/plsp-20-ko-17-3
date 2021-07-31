import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AdminAddLessonNewLessonModal } from '../../../components';
import MainActions from '../../actions/mainActions';

class AdminAddLessonNewLessonModalContainer extends Component {

  render () {
    return (
      <AdminAddLessonNewLessonModal {...this.props}/>
    )
  }
}

export default connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(AdminAddLessonNewLessonModalContainer)
