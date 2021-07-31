import React from 'react';
import Modal from 'react-modal';
import './FullTest.scss';
import checkMark from '../../img/check-mark.svg';
import unCheckMark from '../../img/box.svg';
import loading from '../../img/loading.svg';

const FullTest = ({
  lesson_test_data, test_user_results_arr, testGetValueSelectedUser,
  test_user_finish_test_modal_isopen, testUserFinishTest, testSetUserFinishTestModalIsOpen,
  part, button_disabled_bool
}) => {

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  
  if (test_user_results_arr.length === 0) {
    shuffle(lesson_test_data[0].lesson_test)
  }

  return (
    <div className="page-container">
      <div className="full-test">
        {
          test_user_results_arr.length === 0 ?
            <div className="preloader"><img src={loading} alt="loading"/> Loading...</div>
            :
            <>
            <h3 className="full-test__title title_1">{lesson_test_data[0].lesson_title} <span>Test</span></h3>
              {
                lesson_test_data[0].lesson_test.map(q =>
                  <div  key={q.question_id} className="full-test__question">
                    <div className="info">
                      <h5 className="rating">{q.question_rating} балів за питання</h5>
                      <h4 className="title_3">{q.question_text}</h4>
                    </div>

                    <div>
                      <p className="max-answers text">максимум {q.question_answers.length} варіантів(-ти)</p>
                    </div>

                    <div className="question-body">
                      {
                        q.question_options.map(opt =>
                          <div
                            className="question text"
                            key={Math.random()}
                            onClick={
                              test_user_results_arr.filter(item => item.question_id === q.question_id)[0].user_answer.length >= q.question_answers.length ?
                                test_user_results_arr.filter(item => item.question_id === q.question_id)[0].user_answer.filter(item => item === opt).length !== 0 ?
                                () => testGetValueSelectedUser(opt, q.question_id)
                                :
                                null
                              :
                              () => testGetValueSelectedUser(opt, q.question_id)
                            }
                          >
                            {
                                test_user_results_arr.filter(item => item.question_id === q.question_id)[0].user_answer.filter(item => item === opt).length === 0  ?
                                <span className="not-checked"><img src={unCheckMark} alt="unCheckMark"/></span>
                                :
                                <span className="checked"><img src={checkMark} alt="checkMark"/></span>
                            }
                            {opt}
                          </div>
                        )
                      }
                    </div>
                  </div>
                )
              }

            <button
              className={
                test_user_results_arr.filter(item => item.user_answer.length !==0).length !== 0 ?
                  "full-test__finish-button test-button"
                  :
                  "full-test__finish-button test-button--disabled"
              }
              onClick={() => testSetUserFinishTestModalIsOpen(true)}
              disabled={test_user_results_arr.filter(item => item.user_answer.length !==0).length !== 0 ? false : true}
            >
              Закінчити TEST
            </button>
            <Modal
              isOpen={test_user_finish_test_modal_isopen}
              onRequestClose={() => testSetUserFinishTestModalIsOpen(false)}
            >
              <div className="full-test__modal-confirm-buttons">
                <div
                  onClick={testUserFinishTest}
                  className={button_disabled_bool ? "button--disabled" : "button"}
                  disabled={button_disabled_bool}
                >
                  Закінчити TEST
                </div>
                <div
                  onClick={() => testSetUserFinishTestModalIsOpen(false)}
                  className={button_disabled_bool ? "test-button--disabled" : "test-button"}
                  disabled={button_disabled_bool}
                >
                  Продовжити TEST
                </div>
              </div>
            </Modal>
          </>
        }
      </div>
    </div>
  )
}

export default FullTest;
