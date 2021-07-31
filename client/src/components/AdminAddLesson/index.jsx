import React from 'react';
import Modal from 'react-modal';
import checkMark from '../../img/check-mark.svg';
import unCheckMark from '../../img/box.svg';
import loading from '../../img/loading.svg';
import './AdminAddLesson.scss';

const AdminAddLesson = ({
  parts, button_disabled_bool,
  add_lesson_lesson_title, getLessonTitle,
  add_lesson_part_input_value, getPartInputValue,
  add_lesson_new_part_title, getNewPartTitleValue,
  add_lesson_lesson_module_type_arr,
  add_lesson_lesson_module_type, setLessonModuleType,
  add_lesson_module_text_input_value, getLessonModuleTextInputValue,
  add_lesson_module_img_input_value, getLessonModuleImgInputValue,
  add_lesson_module_title_big_input_value, getLessonModuleTitleBigInputValue,
  add_lesson_module_title_smoll_input_value, getLessonModuleTitleSmollInputValue,
  add_lesson_module_video_input_value, getLessonModuleVideoInputValue,
  addLessonModuleToModules, add_lesson_lesson_modules,
  setNewLessonModalIsOpen, postNewLesson, cancelPostNewLesson, add_lesson_confirm_modal,
  setAddLessonConfirmModalIsOpen, add_lesson_part_id, add_lesson_count_lessons_in_part,
   ...props

}) => {
  return (
    <div className="page-container">
      <div className="admin-add-lesson">
        {
          parts !== null ?
          <form className="admin-add-lesson__container">

            <div className="block_1">

              <h2 className="admin-add-lesson__title title_1">
                Форма додавання уроку
              </h2>
              <div className="admin-add-lesson__change-part">
                <h3 className="title title_3">Виберіть до якої теми додати урок</h3>
                  {
                    parts.map(item =>
                      <label
                        key={item._id}
                        className={add_lesson_part_input_value === item.partNumber ? "item-checked" :"item"}
                      >
                        <img src={add_lesson_part_input_value === item.partNumber ? checkMark : unCheckMark} alt="checkMark"/>
                        {item.partNumber+ " " + item.partName}
                        <input
                          type="radio"
                          name="parts"
                          value={add_lesson_part_input_value}
                          onChange={() => getPartInputValue(item.partNumber, item.lessons.length, item._id)}
                        />

                      </label>
                    )
                  }
                  <label className={add_lesson_part_input_value === parts.length + 1 ? "item-checked" :"item"}>
                    <img src={add_lesson_part_input_value === parts.length + 1 ? checkMark : unCheckMark} alt="checkMark"/>
                    Створити нову тему
                    <input
                      type="radio"
                      name="parts"
                      value={add_lesson_part_input_value}
                      onChange={() => getPartInputValue(parts.length + 1, 0 , 0)}
                    />
                  </label>

                  {
                    add_lesson_part_id === 0 ?
                      <div className="new-item">
                        <label>
                          <span>Заголовок нової теми</span>
                          <input
                            type="text"
                            value={add_lesson_new_part_title}
                            onChange={(e) => getNewPartTitleValue(e.target.value)}
                            placeholder="Введіть заголовок"
                          />
                        </label>
                      </div> :
                      ''
                  }

              </div>

              {
                add_lesson_part_input_value !== 0 &&  add_lesson_part_input_value !== '' ?
                  <div className="admin-add-lesson__lessons">
                    <h3 className="title title_3">Уроки в темі</h3>
                    { add_lesson_count_lessons_in_part !== 0 ?
                      parts.filter(item => item.partNumber === add_lesson_part_input_value)[0].lessons.map(item =>
                        <div
                          className="item"
                          key={item.lesson_number+item.lesson_title}
                        >
                          {item.lesson_number + " " + item.lesson_title}
                        </div>
                      ) :
                      'Немає уроків'
                    }
                  </div>
                  :
                  ''
              }
          </div>



          <div className="block_2">
              {
                add_lesson_part_input_value !== '' ?
                  <div className="admin-add-lesson__add-lessons">

                    <div className="add-title">
                      <h2 className="title title_3">
                        Заголовок нового уроку
                      </h2>
                      <input
                        type="text"
                        value={add_lesson_lesson_title}
                        onChange={(e) => getLessonTitle(e.target.value)}
                        placeholder="Введіть заголовок"
                      />
                    </div>

                    <div className="add-content">
                      <h2 className="title title_3">
                        Що додати до уроку?
                      </h2>
                      <div className="items">
                        {add_lesson_lesson_module_type_arr.map(item =>
                          <label key={item+Math.random()} className={add_lesson_lesson_module_type === item ? "item--checked": "item"}>
                            <img src={add_lesson_lesson_module_type === item ? checkMark : unCheckMark} alt="checkMark"/>
                            <span>{item}</span>
                            <input
                              type="radio"
                              value={add_lesson_lesson_module_type}
                              onChange={()=> setLessonModuleType(item)}
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                  :
                  ''
              }
              <div className="admin-add-lesson__add-lesson-content">
              {
                  add_lesson_lesson_module_type !== '' ?

                    add_lesson_lesson_module_type === 'text' ?
                    <div className="add-item">
                      <h3 className="title title_3">Введіть текст</h3>
                      <textarea
                        wrap="soft"
                        cols="auto"
                        rows="20"
                        value={add_lesson_module_text_input_value}
                        onChange={(e) => getLessonModuleTextInputValue(e.target.value)}
                      />
                      <button
                        disabled={add_lesson_module_text_input_value !== ''  ? false : true}
                        onClick={(e) => addLessonModuleToModules(e)}
                        className="add-item-button button"
                      >
                        Додати {add_lesson_lesson_module_type} до уроку
                      </button>
                    </div>
                    :
                    add_lesson_lesson_module_type === 'img' ?
                    <div className="add-item">
                      <h3 className="title title_3">Вставте URL картинки</h3>
                      <input
                        type="text"
                        value={add_lesson_module_img_input_value}
                        onChange={(e) => getLessonModuleImgInputValue(e.target.value)}
                      />
                      <button
                        disabled={add_lesson_module_img_input_value !== '' ? false : true}
                        onClick={(e) => addLessonModuleToModules(e)}
                        className="add-item-button button"
                      >
                        Додати {add_lesson_lesson_module_type} до уроку
                      </button>
                    </div>
                    :
                    add_lesson_lesson_module_type === 'title_big' ?
                    <div className="add-item">
                      <h3 className="title title_3">Великий заголовок</h3>
                      <input
                        type="text"
                        value={add_lesson_module_title_big_input_value}
                        onChange={(e) => getLessonModuleTitleBigInputValue(e.target.value)}
                      />
                      <button
                        disabled={add_lesson_module_title_big_input_value !== '' ? false : true}
                        onClick={(e) => addLessonModuleToModules(e)}
                        className="add-item-button button"
                      >
                        Додати {add_lesson_lesson_module_type} до уроку
                      </button>
                    </div>
                    :
                    add_lesson_lesson_module_type === 'title_smoll' ?
                    <div className="add-item">
                      <h3 className="title title_3">Підзаголовок</h3>
                      <input
                        type="text"
                        value={add_lesson_module_title_smoll_input_value}
                        onChange={(e) => getLessonModuleTitleSmollInputValue(e.target.value)}
                      />
                      <button
                        disabled={add_lesson_module_title_smoll_input_value !== '' ? false : true}
                        onClick={(e) => addLessonModuleToModules(e)}
                        className="add-item-button button"
                      >
                        Додати {add_lesson_lesson_module_type} до уроку
                      </button>
                    </div>
                    :
                    add_lesson_lesson_module_type === 'video' ?
                    <div className="add-item">
                      <h3 className="title title_3">Вставте URL відео</h3>
                      <input
                        type="text"
                        value={add_lesson_module_video_input_value}
                        onChange={(e) => getLessonModuleVideoInputValue(e.target.value)}
                      />
                      <button
                        disabled={add_lesson_module_video_input_value !== '' ? false : true}
                        onClick={(e) => addLessonModuleToModules(e)}
                        className="add-item-button button"
                      >
                        Додати {add_lesson_lesson_module_type} до уроку
                      </button>
                    </div>
                    :
                    ''
                  :
                  ''
              }
              </div>

            </div>
            {
              add_lesson_part_input_value !== ''  && add_lesson_lesson_modules.length > 0 ?
              <div className="admin-add-lesson__control-button">

                <div
                  onClick={() => setAddLessonConfirmModalIsOpen(true)}
                  className="test-button"
                >
                  Відправити урок учням
                </div>
                <div
                  onClick={() => setNewLessonModalIsOpen(true)}
                  className="button"
                >
                  Продивитись урок
                </div>


                <Modal isOpen={add_lesson_confirm_modal}>
                  <div className="admin-add-lesson__modal-confirm-buttom">
                    <button
                      onClick={() => postNewLesson(props.history)}
                      className={button_disabled_bool ? "test-button--disabled" : "test-button"}
                      disabled={button_disabled_bool}
                    >
                      Відправити урок учням
                    </button>
                    <button
                      onClick={() => cancelPostNewLesson(props.history)}
                      className={button_disabled_bool ? "button--disabled" : "button"}
                      disabled={button_disabled_bool}
                    >
                      Відмінити
                    </button>
                  </div>
                </Modal>

              </div> :
              ''
            }

          </form> :
        <div className="preloader"><img src={loading} alt="loading"/> Loading...</div>
      }
      </div>
    </div>
  )
}

export default AdminAddLesson;
