import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AdminEditLesson } from '../../../components';
import MainActions from '../../actions/mainActions';

class AdminEditLessonContainer extends Component {

  componentDidMount () {
    const { editLessonClearPage } = this.props;
    editLessonClearPage()
  }

  render () {
    return (
      <AdminEditLesson {...this.props}/>
    )
  }
}

export default withRouter(connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(AdminEditLessonContainer))
