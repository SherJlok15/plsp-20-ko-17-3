import React from 'react';
import Modal from 'react-modal';
import loading from '../../img/loading.svg';
import './UserTestResultModal.scss';

const UserTestResultModal = ({
  test_user_test_result_modal_isopen,
  test_user_test_rating, lesson_test_data, test_user_results_arr,
  testOnCloseUserTestResultModal, ...props
}) => {
  return (
    <Modal isOpen={test_user_test_result_modal_isopen} onRequestClose={() => testOnCloseUserTestResultModal(props.history)}>
      <div className="page-container">
        {
          test_user_test_rating === null ?
          <div className="preloader"><img src={loading} alt="loading"/> Loading...</div>
          :
          <div className="user-test-result">
            <div
              onClick={() => testOnCloseUserTestResultModal(props.history)}
              className="user-test-result__close-button test-button"
            >
              Закрити
            </div>
            <h2 className="user-test-result__user-rating title_2">
              Ви набрали <span>{test_user_test_rating}</span> балів за TEST
            </h2>
            <div className="user-test-result__color-info">
              <p>Вашу неправильну відповідь виділенно червоним</p>
              <p>Вашу правильну відповідь виділенно зеленим</p>
            </div>
            <div className="user-test-result__body">
              {
                lesson_test_data[0].lesson_test.map(q =>
                  <div key={q.question_id} className="body-item">
                    <h5 className="item-rating">{q.question_rating} балів за питання</h5>
                    <h4 className="item-text">{q.question_text}</h4>
                    <div className="options-container">
                      {
                        q.question_options.map(opt =>
                          <div
                            key={Math.random()}
                            className="option"
                          >
                            {
                              test_user_results_arr.filter(item => item.question_id === q.question_id)[0].user_answer.filter(item => item === opt)[0] !== undefined ?
                                lesson_test_data[0].lesson_test.filter(item => item.question_id === q.question_id)[0].question_answers.filter(item => item === opt)[0] !== undefined ?
                                <span className='green'>{opt}</span>
                                :
                                <span className='red'>{opt}</span>
                              :
                              lesson_test_data[0].lesson_test.filter(item => item.question_id === q.question_id)[0].question_answers.filter(item => item === opt)[0] !== undefined ?
                                <span>{opt}</span>
                                :
                                opt
                            }

                          </div>
                        )
                      }
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        }
      </div>
    </Modal>
  )
}

export default UserTestResultModal;
