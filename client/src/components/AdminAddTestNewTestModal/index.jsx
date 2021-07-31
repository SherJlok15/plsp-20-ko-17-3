import React from 'react';
import Modal from 'react-modal';
import './AdminAddTestNewTestModal.scss';

const AdminAddTestNewTestModal = ({
  add_test_new_test_modal_isopen, AddTestSetNewTestModalIsOpen,
  add_test_questions_arr, newTestModalDeleteQuestion, button_disabled_bool
}) => {
  return (
    <Modal
      isOpen={add_test_new_test_modal_isopen}
      onRequestClose={() => AddTestSetNewTestModalIsOpen(false)}
    >
      <div className="new-test-modal-close-button">
        <div
          onClick={() => AddTestSetNewTestModalIsOpen(false)}
          className={button_disabled_bool ? "test-button--disabled" : "test-button"}
          disabled={button_disabled_bool}
        >
          Закрити
        </div>
      </div>

      {
        add_test_questions_arr.length === 0 ?
          'Пусто'
          :
          <div className="new-test-modal">

            {
              add_test_questions_arr.map((item, index) =>
                <div className="new-test-modal__item">

                  <div className="item-title">
                    <h3 className="title_2">
                      <span>{item.question_text}</span>
                      <button
                        onClick={() => newTestModalDeleteQuestion(index)}
                        className={button_disabled_bool ? "smoll-botton-delete--disabled" : "smoll-botton-delete"}
                        disabled={button_disabled_bool}
                      >
                        видалити
                      </button>
                    </h3>
                  </div>

                  <div className="item-rating">
                    <span>Балів :{item.question_rating}</span>
                  </div>

                  <div className="item-options">
                    {
                      item.question_options.map((opt, indexOpt) => {
                        return (
                          <div className="item-option">
                          {
                            <>
                              <span>{indexOpt + 1}. </span>
                              {opt}
                            </>
                          }
                          {
                            item.question_answers.map(ans => {
                              if (ans === opt) {
                                return <span>  &#10003;</span>
                              } else {
                                return ''
                              }
                            })
                          }
                        </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            }
          </div>
      }
    </Modal>
  )
}

export default AdminAddTestNewTestModal;
