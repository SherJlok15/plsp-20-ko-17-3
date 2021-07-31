import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FullLesson } from '../../../components';
import MainActions from '../../actions/mainActions';

class FullLessonContainer extends Component {

  render () {
    return (
      <FullLesson {...this.props}/>
    )
  }
}

export default connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(FullLessonContainer)
