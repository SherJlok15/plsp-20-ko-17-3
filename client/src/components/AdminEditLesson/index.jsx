import React from 'react';
import {ReactVideoPlayer} from '../';
import './AdminEditLesson.scss';
import checkMark from '../../img/check-mark.svg';
import unCheckMark from '../../img/box.svg';
import loading from '../../img/loading.svg';

const AdminEditLesson = ({
  edit_lesson_data, button_disabled_bool, edit_lesson_lesson_title_edit_bool,
  edit_lesson_edit_module_type, edit_lesson_edit_module_input_value, editLessonGetEditModuleValue,
  edit_lesson_module_edit_bool, editLessonGetEditModuleData,
  editLessonClearEditBlock, editLessonAddChangesToData,
  editLessonDeleteModule, editLessonMoveModule,
  add_lesson_lesson_module_type_arr, edit_lesson_add_module_block_visible,
  edit_lesson_add_module_type, editLessonGetAddModuleType,
  edit_lesson_add_module_big_title, editLessonGetAddModuleBigTitle,
  edit_lesson_add_module_smoll_title, editLessonGetAddModuleSmollTitle,
  edit_lesson_add_module_text, editLessonGetAddModuleText,
  edit_lesson_add_module_img, editLessonGetAddModuleImg,
  edit_lesson_add_module_video, editLessonGetAddModuleVideo,
  editLessonSetEditTitleData,
  edit_lesson_lesson_title_value, editLessonSetLessonTitleValue,
  editLessonOnCancelEditLessonTitle,
  editLessonPostNewModule, editLessonPostNewLessonTitle,
  ...props
}) => {
  return (
    <div className="page-container">
      {
        edit_lesson_data === null  ?
        <div className="preloader"><img src={loading} alt="loading"/> Loading...</div>
        :
        <>
          {
            edit_lesson_module_edit_bool ?
              ''
              :
              <div className="edit-lesson-add-panel">
                <h3 className="title_1">Панель довавання</h3>

                <div className="edit-lesson-add-panel__change-module-type">
                  {
                    add_lesson_lesson_module_type_arr.map(item =>
                      <label key={Math.random()}>
                        <img
                          src={edit_lesson_add_module_type === item ? checkMark : unCheckMark} alt="checkMark"
                        />
                        <span>{item}</span>
                        <input
                          type="radio"
                          name="moduleType"
                          value={edit_lesson_add_module_type}
                          onChange={() => editLessonGetAddModuleType(item)}
                          checked={edit_lesson_add_module_type===item}
                        />
                      </label>
                    )
                  }
                </div>

                <div className="edit-lesson-add-panel__module-value">

                  {
                    edit_lesson_add_module_type === '' ?
                      ''
                      :
                        edit_lesson_add_module_type === "title_big" ?
                        <>
                          <span className="title_3">Великий заголовок</span>
                          <input
                            type="text"
                            value={edit_lesson_add_module_big_title}
                            onChange={(e) => editLessonGetAddModuleBigTitle(e.target.value)}
                          />
                        </>
                        :
                        edit_lesson_add_module_type === "title_smoll" ?
                        <>
                          <span className="title_3">Підзаголовок</span>
                          <input
                            type="text"
                            value={edit_lesson_add_module_smoll_title}
                            onChange={(e) => editLessonGetAddModuleSmollTitle(e.target.value)}
                          />
                        </>
                        :
                        edit_lesson_add_module_type === "text" ?
                        <>
                          <span className="title_3">Текст</span>
                          <textarea
                            value={edit_lesson_add_module_text}
                            onChange={(e) => editLessonGetAddModuleText(e.target.value)}
                            wrap="soft"
                            cols="auto"
                            rows="20"
                          />
                        </>
                        :
                        edit_lesson_add_module_type === "img" ?
                        <>
                          <span className="title_3">URL картинки</span>
                          <input
                            type="text"
                            value={edit_lesson_add_module_img}
                            onChange={(e) => editLessonGetAddModuleImg(e.target.value)}
                          />
                        </>
                        :
                        edit_lesson_add_module_type === "video" ?
                        <>
                          <span className="title_3">URL відео</span>
                          <input
                            type="text"
                            value={edit_lesson_add_module_video}
                            onChange={(e) => editLessonGetAddModuleVideo(e.target.value)}
                          />
                        </>
                        :
                        ''
                  }

                </div>

                <div className="edit-lesson-add-panel__control-buttons">
                  {
                    edit_lesson_add_module_big_title !== '' ||
                    edit_lesson_add_module_smoll_title !== '' ||
                    edit_lesson_add_module_text !== '' ||
                    edit_lesson_add_module_img !== '' ||
                    edit_lesson_add_module_video !== '' ?
                      <button
                        onClick={() => editLessonPostNewModule(props.history)}
                        disabled={button_disabled_bool}
                        className={button_disabled_bool ? 'button--disabled' : 'button'}
                      >
                        Додати
                      </button>
                      :
                      ''
                  }
                </div>

              </div>
          }


          {
            edit_lesson_module_edit_bool ?
              <div className="edit-lesson-edit-panel">
                <h2 className="title_1">Панель редагування</h2>
                {
                  edit_lesson_lesson_title_edit_bool ?
                  <div className="edit-lesson-edit-panel__title-edit-panel">
                    <h3 className="title_3">Заголовок уроку</h3>
                    <input
                      type="text"
                      value={edit_lesson_lesson_title_value}
                      onChange={(e) => editLessonSetLessonTitleValue(e.target.value)}
                      autoFocus
                    />
                  <div className="title-edit-panel-control-buttons">
                      <button
                        onClick={() => editLessonPostNewLessonTitle(props.history)}
                        disabled={button_disabled_bool}
                        className={button_disabled_bool ? 'button--disabled' : 'button'}
                      >
                        Готово
                      </button>
                      <button
                        onClick={editLessonOnCancelEditLessonTitle}
                        disabled={button_disabled_bool}
                        className={button_disabled_bool ? 'test-button--disabled' : 'test-button'}
                      >
                        Відмінити
                      </button>
                    </div>
                  </div>
                  :
                  <div className="edit-lesson-edit-panel__content-edit-panel">
                    {
                      edit_lesson_edit_module_type === 'text' ?
                        <>
                          <h3 className="title_3">Редагування тексту</h3>
                          <textarea
                            value={edit_lesson_edit_module_input_value}
                            onChange={(e) => editLessonGetEditModuleValue(e.target.value)}
                            rows='20'
                            col="auto"
                          />
                        </>
                        :
                        edit_lesson_edit_module_type === 'title_big' ||
                        edit_lesson_edit_module_type === 'title_smoll' ||
                        edit_lesson_edit_module_type === 'img' ||
                        edit_lesson_edit_module_type === 'video' ?
                          <>
                            <h3 className="title_3">
                              {
                                edit_lesson_edit_module_type === 'title_big' ?
                                'Редагування великого заголовку'
                                :
                                edit_lesson_edit_module_type === 'title_smoll' ?
                                'Редагування підзаголовку'
                                :
                                edit_lesson_edit_module_type === 'img' ?
                                'Змінити URL картинки'
                                :
                                edit_lesson_add_module_video === 'video' ?
                                'Змінити URL відео'
                                :
                                ''
                              }
                            </h3>
                            <input
                              value={edit_lesson_edit_module_input_value}
                              onChange={(e) => editLessonGetEditModuleValue(e.target.value)}
                            />
                          </>
                        :
                        ''
                    }
                    <div className="content-edit-panel-control-buttons">
                      <button
                        onClick={() => editLessonAddChangesToData(props.history)}
                        disabled={button_disabled_bool}
                        className={button_disabled_bool ? 'button--disabled' : 'button'}
                      >
                        Готово
                      </button>
                      <button
                        onClick={editLessonClearEditBlock}
                        disabled={button_disabled_bool}
                        className={button_disabled_bool ? 'test-button--disabled' : 'test-button'}
                      >
                        Відмінити
                      </button>
                    </div>
                  </div>
                }

              </div>

              :
              ''
          }


          <div className="edit-lesson-content">

            <div className="edit-lesson-content__title">
              <h1 className="title_1 title">
                {edit_lesson_data[0].lesson_title}
              </h1>
              <div className="title-control-buttons">
                {
                  edit_lesson_lesson_title_edit_bool ||
                  edit_lesson_module_edit_bool ||
                  edit_lesson_add_module_big_title !== '' ||
                  edit_lesson_add_module_smoll_title !== '' ||
                  edit_lesson_add_module_text !== '' ||
                  edit_lesson_add_module_img !== '' ||
                  edit_lesson_add_module_video !== '' ?
                  ''
                  :
                  <button
                    onClick={() => editLessonSetEditTitleData(edit_lesson_data[0].lesson_title)}
                    className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                  >
                    Редагувати
                  </button>
                }
              </div>
            </div>

            <div className="edit-lesson-content__items">
              {
                edit_lesson_data[0].lesson_text.map((mod, index, arr) =>
                  <div key={Math.random()} className="edit-lesson-content__item">
                    {
                      mod.module_type === 'title_big' ?
                      <div className="title_2 title_big">
                        <h1>{mod.module_value}</h1>
                        <div className="title_big-control-buttons">
                          {
                            edit_lesson_module_edit_bool ||
                            edit_lesson_add_module_big_title !== '' ||
                            edit_lesson_add_module_smoll_title !== '' ||
                            edit_lesson_add_module_text !== '' ||
                            edit_lesson_add_module_img !== '' ||
                            edit_lesson_add_module_video !== '' ?
                              ''
                              :
                              <>
                                {
                                  index !== 0 ?
                                    <button
                                      onClick={() => editLessonMoveModule(mod.module_number, index, 'up', props.history)}
                                      disabled={button_disabled_bool}
                                      className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                    >
                                      перемісти &#8593;
                                    </button>
                                    :
                                    ''
                                }

                                {
                                  index !== arr.length -1 ?
                                    <button
                                      onClick={() => editLessonMoveModule(mod.module_number, index, 'down', props.history)}
                                      disabled={button_disabled_bool}
                                      className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                    >
                                      перемістити &#8595;
                                    </button>
                                    :
                                    ''
                                }

                                <button
                                  onClick={() => editLessonGetEditModuleData(mod.module_value, true, mod.module_type, mod.module_number)}
                                  disabled={button_disabled_bool}
                                  className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                >
                                  Редагувати
                                </button>

                                <button
                                  onClick={() => editLessonDeleteModule(mod.module_number, props.history)}
                                  disabled={button_disabled_bool}
                                  className={button_disabled_bool ? 'smoll-botton-delete--disabled' : 'smoll-botton-delete'}
                                >
                                  Видалити
                                </button>
                              </>
                          }
                        </div>
                      </div> :
                      mod.module_type === 'title_smoll' ?
                      <div className="title_3 title_smoll">
                        <h4>{mod.module_value}</h4>
                        <div className="title_smoll-control-buttons">
                          {
                            edit_lesson_module_edit_bool ||
                            edit_lesson_add_module_big_title !== '' ||
                            edit_lesson_add_module_smoll_title !== '' ||
                            edit_lesson_add_module_text !== '' ||
                            edit_lesson_add_module_img !== '' ||
                            edit_lesson_add_module_video !== '' ?
                              ''
                              :
                              <>
                                {
                                  index !== 0 ?
                                    <button
                                      onClick={() => editLessonMoveModule(mod.module_number, index, 'up', props.history)}
                                      disabled={button_disabled_bool}
                                      className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                    >
                                      перемісти &#8593;
                                    </button>
                                    :
                                    ''
                                }

                                {
                                  index !== arr.length -1 ?
                                    <button
                                      onClick={() => editLessonMoveModule(mod.module_number, index, 'down', props.history)}
                                      disabled={button_disabled_bool}
                                      className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                    >
                                      перемістити &#8595;
                                    </button>
                                    :
                                    ''
                                }
                                <button
                                  onClick={() => editLessonGetEditModuleData(mod.module_value, true, mod.module_type, mod.module_number)}
                                  disabled={button_disabled_bool}
                                  className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                >
                                  Редагувати
                                </button>

                                <button
                                  onClick={() => editLessonDeleteModule(mod.module_number, props.history)}
                                  disabled={button_disabled_bool}
                                  className={button_disabled_bool ? 'smoll-botton-delete--disabled' : 'smoll-botton-delete'}
                                >
                                  Видалити
                                </button>
                              </>
                          }
                        </div>
                      </div> :
                      mod.module_type === 'text' ?
                      <div className="text">
                        <p>{mod.module_value}</p>
                        <div className="text-control-buttons">
                          {
                            edit_lesson_module_edit_bool ||
                            edit_lesson_add_module_big_title !== '' ||
                            edit_lesson_add_module_smoll_title !== '' ||
                            edit_lesson_add_module_text !== '' ||
                            edit_lesson_add_module_img !== '' ||
                            edit_lesson_add_module_video !== '' ?
                              ''
                              :
                              <>
                                {
                                  index !== 0 ?
                                    <button
                                      onClick={() => editLessonMoveModule(mod.module_number, index, 'up', props.history)}
                                      disabled={button_disabled_bool}
                                      className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                    >
                                      перемісти &#8593;
                                    </button>
                                    :
                                    ''
                                }

                                {
                                  index !== arr.length -1 ?
                                    <button
                                      onClick={() => editLessonMoveModule(mod.module_number, index, 'down', props.history)}
                                      disabled={button_disabled_bool}
                                      className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                    >
                                      перемістити &#8595;
                                    </button>
                                    :
                                    ''
                                }
                                <button
                                  onClick={() => editLessonGetEditModuleData(mod.module_value, true, mod.module_type, mod.module_number)}
                                  disabled={button_disabled_bool}
                                  className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                >
                                  Редагувати
                                </button>

                                <button
                                  onClick={() => editLessonDeleteModule(mod.module_number, props.history)}
                                  disabled={button_disabled_bool}
                                  className={button_disabled_bool ? 'smoll-botton-delete--disabled' : 'smoll-botton-delete'}
                                >
                                  Видалити
                                </button>
                                </>
                          }
                        </div>
                      </div> :
                      mod.module_type === 'img' ?
                      <div className="img">
                        <img src={mod.module_value} alt="img"/>
                        <div className="img-control-buttons">
                          {
                            edit_lesson_module_edit_bool ||
                            edit_lesson_add_module_big_title !== '' ||
                            edit_lesson_add_module_smoll_title !== '' ||
                            edit_lesson_add_module_text !== '' ||
                            edit_lesson_add_module_img !== '' ||
                            edit_lesson_add_module_video !== '' ?
                              ''
                              :
                              <>
                                {
                                  index !== 0 ?
                                    <button
                                      onClick={() => editLessonMoveModule(mod.module_number, index, 'up', props.history)}
                                      disabled={button_disabled_bool}
                                      className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                    >
                                      перемісти &#8593;
                                    </button>
                                    :
                                    ''
                                }

                                {
                                  index !== arr.length -1 ?
                                    <button
                                      onClick={() => editLessonMoveModule(mod.module_number, index, 'down', props.history)}
                                      disabled={button_disabled_bool}
                                      className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                    >
                                      перемістити &#8595;
                                    </button>
                                    :
                                    ''
                                }
                                <button
                                  onClick={() => editLessonGetEditModuleData(mod.module_value, true, mod.module_type, mod.module_number)}
                                  disabled={button_disabled_bool}
                                  className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                >
                                  Редагувати
                                </button>

                                <button
                                  onClick={() => editLessonDeleteModule(mod.module_number, props.history)}
                                  disabled={button_disabled_bool}
                                  className={button_disabled_bool ? 'smoll-botton-delete--disabled' : 'smoll-botton-delete'}
                                >
                                  Видалити
                                </button>
                              </>
                          }
                        </div>
                      </div> :
                      mod.module_type === 'video' ?
                      <div className="video">
                        <ReactVideoPlayer url={mod.module_value}/>
                      <div className="video-control-buttons">
                          {
                            edit_lesson_module_edit_bool ||
                            edit_lesson_add_module_big_title !== '' ||
                            edit_lesson_add_module_smoll_title !== '' ||
                            edit_lesson_add_module_text !== '' ||
                            edit_lesson_add_module_img !== '' ||
                            edit_lesson_add_module_video !== '' ?
                              ''
                              :
                              <>
                                {
                                  index !== 0 ?
                                    <button
                                      onClick={() => editLessonMoveModule(mod.module_number, index, 'up', props.history)}
                                      disabled={button_disabled_bool}
                                      className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                    >
                                      перемісти &#8593;
                                    </button>
                                    :
                                    ''
                                }

                                {
                                  index !== arr.length -1 ?
                                    <button
                                      onClick={() => editLessonMoveModule(mod.module_number, index, 'down', props.history)}
                                      disabled={button_disabled_bool}
                                      className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                    >
                                      перемістити &#8595;
                                    </button>
                                    :
                                    ''
                                }
                                <button
                                  onClick={() => editLessonGetEditModuleData(mod.module_value, true, mod.module_type, mod.module_number)}
                                  disabled={button_disabled_bool}
                                  className={ button_disabled_bool ? 'smoll-botton-control--disabled' : 'smoll-botton-control'}
                                >
                                  Редагувати
                                </button>

                                <button
                                  onClick={() => editLessonDeleteModule(mod.module_number, props.history)}
                                  disabled={button_disabled_bool}
                                  className={button_disabled_bool ? 'smoll-botton-delete--disabled' : 'smoll-botton-delete'}
                                >
                                  Видалити
                                </button>
                              </>
                          }
                        </div>
                      </div> :
                      ''
                    }
                  </div>
                )
              }
            </div>

          </div>
        </>
      }

    </div>
  )
}

export default AdminEditLesson;
