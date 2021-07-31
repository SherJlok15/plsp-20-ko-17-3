import React from 'react';
import Modal from 'react-modal';
import {ReactVideoPlayer} from '../';

import './AdminAddLessonNewLessonModal.scss';

Modal.setAppElement('#root');

const AdminAddLessonNewLessonModal = ({
  add_lesson_new_lesson_modal_isopen, setNewLessonModalIsOpen,
  add_lesson_lesson_modules, add_lesson_lesson_title,
  newLessonModalDeleteItem, newLessonModalMoveItemDown, newLessonModalMoveItemUp,
}) => {
  return (
    <Modal isOpen={add_lesson_new_lesson_modal_isopen} onRequestClose={() => setNewLessonModalIsOpen(false)}>
      <div className="page-container">
        <div className="new-lesson-modal">
          <div className="modal-close-button">
            <span
              onClick={() => setNewLessonModalIsOpen(false)}
              className="test-button modal-close-button"
            >
              Закрити
            </span>
          </div>

          <div className="title_1 lessson-title">{add_lesson_lesson_title}</div>
          <div className="new-lesson-modal__items">
            {
              add_lesson_lesson_modules.length > 0 ?
                add_lesson_lesson_modules.map((item, index, arr) =>
                    <div
                      key={item.module_number+Math.random()}
                      className="new-lesson-modal__item"
                    >
                          {
                            item.module_type === 'title_big' ?
                            <div className="title-big-item">
                              <h1 className="title_2">
                                {item.module_value}
                              </h1>
                            </div> :
                            item.module_type === 'title_smoll' ?
                            <div className="title-smoll-item">
                              <h4 className="title_3">
                                {item.module_value}
                              </h4>
                            </div> :
                            item.module_type === 'text' ?
                            <div className="text-item">
                              <p>
                                {item.module_value}
                              </p>
                            </div> :
                            item.module_type === 'img' ?
                            <div className="img-item">
                              <img src={item.module_value} alt="img" />
                            </div> :
                            item.module_type === 'video' ?
                            <div className="video-item">
                              <ReactVideoPlayer url={item.module_value}/>
                            </div> :
                            ''
                          }
                          <div className="control-button">
                            {
                              arr.length > 1 ?
                              <>
                                {
                                  index !== 0 ?
                                  <span
                                    onClick={() => newLessonModalMoveItemUp(index)}
                                    className="smoll-botton-control"
                                  >
                                  перемісти &#8593;
                                  </span>:
                                  ''
                                }
                                {
                                  index !== arr.length -1 ?
                                  <span
                                    onClick={() => newLessonModalMoveItemDown(index)}
                                    className="smoll-botton-control"
                                  >
                                    перемістити &#8595;
                                  </span> :
                                  ''
                                }

                              </>
                              :
                              ''
                            }
                            <span
                              onClick={() => newLessonModalDeleteItem(index)}
                              className="smoll-botton-delete"
                            >
                              видилити
                            </span>
                          </div>
                    </div>
                )
                :
                'Пусто'
            }
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default AdminAddLessonNewLessonModal;
