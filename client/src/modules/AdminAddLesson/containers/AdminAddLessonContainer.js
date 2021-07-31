import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AdminAddLesson } from '../../../components';
import MainActions from '../../actions/mainActions';

class AdminAddLessonContainer extends Component {
  componentDidMount() {
    const { fetchParts, clearAddLessonForm} = this.props;
    clearAddLessonForm();
    fetchParts();
  }

  render () {
    return (
      <AdminAddLesson {...this.props}/>
    )
  }
}

export default withRouter(connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(AdminAddLessonContainer))
