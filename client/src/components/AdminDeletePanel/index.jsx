import React from 'react';
import Modal from 'react-modal';
import Fade from 'react-reveal/Fade';
import loading from '../../img/loading.svg';
import './AdminDeletePanel.scss';

const AdminDeletePanel = ({
  parts, delete_panel_delete_part_id, delete_panel_delete_lesson_index,
  delete_panel_delete_part_modal_isopen, delete_panel_delete_lesson_modal_isopen,
  setDeletePanelDeletePartModalIsOpen, deletePanelOnClickDeletePart, deletePanelOnDeletePart,
  setDeletePanelDeleteLessonModalIsOpen, deletePanelOnClickDeleteLesson, deletePanelOnDeleteLesson,
  setDeletePanelDeleteTestModalIsOpen, deletePanelOnClickDeleteTest, delete_panel_delete_test_modal_isopen,
  deletePanelOnDeleteTest, button_disabled_bool
}) => {

  return (
    <div className="page-container">
      <Fade>
      <div className="title_1 admin-delete-panel-title"> Панель видатення </div>
      {
        parts !== null ?
        <div className="admin-delete-panel">
          {
            parts.map(item =>
              <div key={item._id} className="admin-delete-panel__part">
                <span>{item.partNumber + ' ' + item.partName}</span>
                <span
                  onClick={() => deletePanelOnClickDeletePart(item._id, true)}
                  className="smoll-botton-delete"
                >
                  &#8249; Видалити тему {item.partNumber} &#8250;
                </span>
                <Modal
                  isOpen={delete_panel_delete_part_modal_isopen}
                  onRequestClose={() => deletePanelOnClickDeletePart(null, false)}
                >
                  {
                    delete_panel_delete_part_id !== null ?
                    <div className="delete-part-modal">
                      <button
                        onClick={deletePanelOnDeletePart}
                        className={button_disabled_bool ? "test-button--disabled" : "test-button"}
                        disabled={button_disabled_bool}
                      >
                        Видалити тему
                      </button>

                      <button
                        onClick={() => deletePanelOnClickDeletePart(null, false)}
                        className={button_disabled_bool ? "button--disabled" : "button"}
                        disabled={button_disabled_bool}
                      >
                        Відмінити
                      </button>

                    </div>
                    :
                    <>Завантаження...</>
                  }

                </Modal>
                <div className="admin-delete-panel__lessons">
                  {
                    item.lessons.map((les, index) =>
                      <div key={les.lesson_number + les.lesson_title} className="lesson-item">
                        <span> &#8250; {les.lesson_number + ' ' + les.lesson_title}</span>
                        <span
                          onClick={() => deletePanelOnClickDeleteLesson(item._id, index, true)}
                          className="smoll-botton-delete"
                        >
                          &#8249; Видалити урок {les.lesson_number} &#8250;
                        </span>
                        <div className="admin-delete-panel__test">
                          {
                            les.lesson_test.length !== 0 ?
                              <>
                                <span> &#187; {les.lesson_title} TEST</span>
                                <span
                                  onClick={() => deletePanelOnClickDeleteTest(item._id, index, true)}
                                  className="smoll-botton-delete"
                                >
                                  &#8249; видалити TEST &#8250;
                                </span>

                                <Modal
                                  isOpen={delete_panel_delete_test_modal_isopen}
                                  onRequestClose={() => deletePanelOnClickDeleteTest(null, null, false)}
                                >
                                  <div className="delete-test-modal">
                                    <span
                                      onClick={deletePanelOnDeleteTest}
                                      className={button_disabled_bool ? "test-button--disabled" : "test-button"}
                                      disabled={button_disabled_bool}
                                    >
                                      Видалити ТЕСТ
                                    </span>

                                    <span
                                      onClick={() => deletePanelOnClickDeleteTest(null, null, false)}
                                      className={button_disabled_bool ? "button--disabled" : "button"}
                                      disabled={button_disabled_bool}
                                    >
                                      Відмінити
                                    </span>

                                  </div>
                                </Modal>
                              </>
                              :
                              ''
                          }
                        </div>
                        <Modal
                          isOpen={delete_panel_delete_lesson_modal_isopen}
                          onRequestClose={() => deletePanelOnClickDeleteLesson(null, null, false)}
                        >
                          <div className="delete-lesson-modal">
                            <span
                              onClick={deletePanelOnDeleteLesson}
                              className={button_disabled_bool ? "test-button--disabled" : "test-button"}
                              disabled={button_disabled_bool}
                            >
                              Видалити урок
                            </span>

                            <span
                              onClick={() => deletePanelOnClickDeleteLesson(null, null, false)}
                              className={button_disabled_bool ? "button--disabled" : "button"}
                              disabled={button_disabled_bool}
                            >
                              Відмінити
                            </span>
                          </div>

                        </Modal>
                      </div>
                    )
                  }
                </div>

              </div>
            )
          }
        </div>
        :
        <div className="preloader"><img src={loading} alt="loading"/> Loading...</div>
      }
      </Fade>
    </div>
  )
}

export default AdminDeletePanel;
