import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FullTest } from '../../../components';
import MainActions from '../../actions/mainActions';

class FullTestContainer extends Component {

  componentDidMount() {
    const { setUserStartedTest, testCreateTestUserResultsArr, testClearAppThenUserFinishTest } = this.props;
    testClearAppThenUserFinishTest()
    testCreateTestUserResultsArr();
    setUserStartedTest(true);
  }

  render () {
    return (
      <FullTest {...this.props}/>
    )
  }
}

export default connect(
  ({ mainReducer}) => mainReducer,
  MainActions
)(FullTestContainer)
