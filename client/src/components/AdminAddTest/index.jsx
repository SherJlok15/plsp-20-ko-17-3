import React from 'react';
import Modal from 'react-modal';
import Fade from 'react-reveal/Fade';
import checkMark from '../../img/check-mark.svg';
import unCheckMark from '../../img/box.svg';
import minus from '../../img/minus.svg';
import plus from '../../img/plus.svg';
import loading from '../../img/loading.svg';
import './AdminAddTest.scss';


const AdminAddTest = ({
  parts, add_test_part_id, add_test_lessons_in_part,
  add_test_part_input_value, addTestGetPartInputValue,
  add_test_lesson_input_value, addTestSetLessonInputValue,
  add_test_question_input_value, addTestGetQuestionInputValue,
  add_test_options_count, oNAddTestGetOptionsCountInputValue,
  add_test_option_input_value_1, addTestGetOptionInputValue1,
  add_test_option_input_value_2, addTestGetOptionInputValue2,
  add_test_option_input_value_3, addTestGetOptionInputValue3,
  add_test_option_input_value_4, addTestGetOptionInputValue4,
  add_test_option_input_value_5, addTestGetOptionInputValue5,
  add_test_option_input_value_6, addTestGetOptionInputValue6,
  add_test_is_option_1_correct, addTestSetOptionCorrect1,
  add_test_is_option_2_correct, addTestSetOptionCorrect2,
  add_test_is_option_3_correct, addTestSetOptionCorrect3,
  add_test_is_option_4_correct, addTestSetOptionCorrect4,
  add_test_is_option_5_correct, addTestSetOptionCorrect5,
  add_test_is_option_6_correct, addTestSetOptionCorrect6,
  add_test_question_rating, addTestGetQuestionRating,
  addTestAddNewQuestion, add_test_questions_arr,
  AddTestSetNewTestModalIsOpen, button_disabled_bool,
  add_test_confirm_sent_test_modal_isopen, AddTestSetConfirmSentTestModalIsOpen,
  addTestPostNewTest, addTestGetLessonTestDraft, ...props
}) => {
  return (
    <div className="page-container">
      <Fade>
      {
        parts !== null ?
          <div className="admin-add-test">
            <div className="admin-add-test__block_1">
              <div className="admin-add-test__block_1__title">
                <h2 className="title_2">Форма створення тесту</h2>
              </div>

              <div className="admin-add-test__block_1__change-part">
                <h3 className="title_3 title">Виберіть тему</h3>
                <div className="items">
                  {
                      parts.map(item =>
                        <label key={item._id} className={add_test_part_input_value === item.partNumber? "item--checked" : "item"}>
                          <img src={add_test_part_input_value === item.partNumber? checkMark : unCheckMark} alt="checkMark"/>
                          {item.partNumber+ " " + item.partName}
                          <input
                            type="radio"
                            name="parts"
                            value={add_test_part_input_value}
                            onChange={() => addTestGetPartInputValue(item.partNumber, item._id, item.lessons.filter(less => less.lesson_test.length === 0).length)}
                          />
                        </label>
                      )
                  }
                </div>
              </div>

              <div className="admin-add-test__block_1__change-lesson">
                {
                  add_test_part_input_value !== '' ?
                    <>
                      <h3 className="title title_3">До якого уроку додати тест?</h3>
                      {
                        add_test_lessons_in_part !== 0 ?
                          <div className="items">
                            {
                              parts.filter(part => part._id === add_test_part_id)[0].lessons.filter(l => l.lesson_test.length === 0).map(les =>
                                <div key={Math.random()} className={les.lesson_title === add_test_lesson_input_value ? "item--checked" : "item"}>
                                  <label>
                                    <img src={les.lesson_title === add_test_lesson_input_value ? checkMark : unCheckMark} alt="checkMark"/>
                                    {les.lesson_title}
                                    <input
                                      type="radio"
                                      name="lesson"
                                      value={add_test_lesson_input_value}
                                      onChange={() => addTestSetLessonInputValue(les.lesson_title, les.lesson_number)}
                                      checked={les.lesson_title === add_test_lesson_input_value ? true : false}
                                    />
                                  </label>
                                </div>

                              )
                            }
                          </div>
                          :
                          "Немає уроків або усі уроки з тестами"
                      }
                    </>
                    :
                    ''
                }
              </div>
            </div>

            <div className="admin-add-test__block_2">

            <div className="admin-add-test__block_2__add-question">
              {
                add_test_lesson_input_value !== '' ?
                  <>
                  <h3 className="title_3 title">Додати питання</h3>
                  <div className="question-form">

                    <div className="form-add-question">
                      <label>
                        <span>Впишіть питання :</span>
                        <input
                          type="text"
                          value={add_test_question_input_value}
                          onChange={(e) => addTestGetQuestionInputValue(e.target.value)}
                        />
                      </label>
                    </div>

                    <div className="form-options-count">
                      <div className="title_3 title">
                        <p>Кількість можливих варіантів відповіді</p>
                      </div>
                      <div className="items">
                        <label className={add_test_options_count === 1 ? "item--checked" : "item"}>
                          <img src={add_test_options_count === 1 ? checkMark : unCheckMark} alt="checkMark"/>
                          1
                          <input
                            type="radio"
                            name="options_count"
                            value={add_test_options_count}
                            onChange={() => oNAddTestGetOptionsCountInputValue(1)}
                            checked={add_test_options_count === 1 ? true : false}
                          />
                        </label>
                        <label className={add_test_options_count === 2 ? "item--checked" : "item"}>
                          <img src={add_test_options_count === 2 ? checkMark : unCheckMark} alt="checkMark"/>
                          2
                          <input
                            type="radio"
                            name="options_count"
                            value={add_test_options_count}
                            onChange={() => oNAddTestGetOptionsCountInputValue(2)}
                            checked={add_test_options_count === 2 ? true : false}
                          />
                        </label>
                        <label className={add_test_options_count === 3 ? "item--checked" : "item"}>
                          <img src={add_test_options_count === 3 ? checkMark : unCheckMark} alt="checkMark"/>
                          3
                          <input
                            type="radio"
                            name="options_count"
                            value={add_test_options_count}
                            onChange={() => oNAddTestGetOptionsCountInputValue(3)}
                            checked={add_test_options_count === 3 ? true : false}
                          />
                        </label>
                        <label className={add_test_options_count === 4 ? "item--checked" : "item"}>
                          <img src={add_test_options_count === 4 ? checkMark : unCheckMark} alt="checkMark"/>
                          4
                          <input
                            type="radio"
                            name="options_count"
                            value={add_test_options_count}
                            onChange={() => oNAddTestGetOptionsCountInputValue(4)}
                            checked={add_test_options_count === 4 ? true : false}
                          />
                        </label>
                        <label className={add_test_options_count === 5 ? "item--checked" : "item"}>
                          <img src={add_test_options_count === 5 ? checkMark : unCheckMark} alt="checkMark"/>
                          5
                          <input
                            type="radio"
                            name="options_count"
                            value={add_test_options_count}
                            onChange={() => oNAddTestGetOptionsCountInputValue(5)}
                            checked={add_test_options_count === 5 ? true : false}
                          />
                        </label>
                        <label className={add_test_options_count === 6 ? "item--checked" : "item"}>
                          <img src={add_test_options_count === 6 ? checkMark : unCheckMark} alt="checkMark"/>
                          6
                          <input
                            type="radio"
                            name="options_count"
                            value={add_test_options_count}
                            onChange={() => oNAddTestGetOptionsCountInputValue(6)}
                            checked={add_test_options_count === 6 ? true : false}
                          />
                        </label>
                      </div>
                    </div>

                    <div className="form-add-options-value">
                      {
                        add_test_options_count !== 0 ?
                          add_test_options_count === 1 ?
                          <div className="item">
                            <label>
                              <span>варіант </span> {add_test_options_count}
                              <input
                                type="text"
                                value={add_test_option_input_value_1}
                                onChange={(e) => addTestGetOptionInputValue1(e.target.value)}
                              />
                            </label>
                            <span>

                              <span onClick={() => addTestSetOptionCorrect1(!add_test_is_option_1_correct)}>
                                {
                                  add_test_is_option_1_correct ?
                                  <img src={plus} alt="plus"/>
                                  :
                                  <img src={minus} alt="minus"/>
                                }
                              </span>
                            </span>
                          </div>
                          :
                          add_test_options_count === 2 ?
                          <>
                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 1}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_1}
                                  onChange={(e) => addTestGetOptionInputValue1(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect1(!add_test_is_option_1_correct)}>
                                  {
                                    add_test_is_option_1_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_2}
                                  onChange={(e) => addTestGetOptionInputValue2(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect2(!add_test_is_option_2_correct)}>
                                  {
                                    add_test_is_option_2_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>
                          </>
                          :
                          add_test_options_count === 3 ?
                          <>
                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 2}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_1}
                                  onChange={(e) => addTestGetOptionInputValue1(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect1(!add_test_is_option_1_correct)}>
                                  {
                                    add_test_is_option_1_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 1}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_2}
                                  onChange={(e) => addTestGetOptionInputValue2(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect2(!add_test_is_option_2_correct)}>
                                  {
                                    add_test_is_option_2_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_3}
                                  onChange={(e) => addTestGetOptionInputValue3(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect3(!add_test_is_option_3_correct)}>
                                  {
                                    add_test_is_option_3_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>
                          </>
                          :
                          add_test_options_count === 4 ?
                          <>
                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 3}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_1}
                                  onChange={(e) => addTestGetOptionInputValue1(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect1(!add_test_is_option_1_correct)}>
                                  {
                                    add_test_is_option_1_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 2}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_2}
                                  onChange={(e) => addTestGetOptionInputValue2(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect2(!add_test_is_option_2_correct)}>
                                  {
                                    add_test_is_option_2_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 1}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_3}
                                  onChange={(e) => addTestGetOptionInputValue3(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect3(!add_test_is_option_3_correct)}>
                                  {
                                    add_test_is_option_3_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_4}
                                  onChange={(e) => addTestGetOptionInputValue4(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect4(!add_test_is_option_4_correct)}>
                                  {
                                    add_test_is_option_4_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>
                          </>
                          :
                          add_test_options_count === 5 ?
                          <>
                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 4}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_1}
                                  onChange={(e) => addTestGetOptionInputValue1(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect1(!add_test_is_option_1_correct)}>
                                  {
                                    add_test_is_option_1_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 3}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_2}
                                  onChange={(e) => addTestGetOptionInputValue2(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect2(!add_test_is_option_2_correct)}>
                                  {
                                    add_test_is_option_2_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 2}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_3}
                                  onChange={(e) => addTestGetOptionInputValue3(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect3(!add_test_is_option_3_correct)}>
                                  {
                                    add_test_is_option_3_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 1}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_4}
                                  onChange={(e) => addTestGetOptionInputValue4(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect4(!add_test_is_option_4_correct)}>
                                  {
                                    add_test_is_option_4_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count }
                                <input
                                  type="text"
                                  value={add_test_option_input_value_5}
                                  onChange={(e) => addTestGetOptionInputValue5(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect5(!add_test_is_option_5_correct)}>
                                  {
                                    add_test_is_option_5_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>
                          </>
                          :
                          add_test_options_count === 6 ?
                          <>
                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 5}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_1}
                                  onChange={(e) => addTestGetOptionInputValue1(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect1(!add_test_is_option_1_correct)}>
                                  {
                                    add_test_is_option_1_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 4}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_2}
                                  onChange={(e) => addTestGetOptionInputValue2(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect2(!add_test_is_option_2_correct)}>
                                  {
                                    add_test_is_option_2_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 3}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_3}
                                  onChange={(e) => addTestGetOptionInputValue3(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect3(!add_test_is_option_3_correct)}>
                                  {
                                    add_test_is_option_3_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 2}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_4}
                                  onChange={(e) => addTestGetOptionInputValue4(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect4(!add_test_is_option_4_correct)}>
                                  {
                                    add_test_is_option_4_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count - 1}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_5}
                                  onChange={(e) => addTestGetOptionInputValue5(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect5(!add_test_is_option_5_correct)}>
                                  {
                                    add_test_is_option_5_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>

                            <div className="item">
                              <label>
                                <span>варіант </span> {add_test_options_count}
                                <input
                                  type="text"
                                  value={add_test_option_input_value_6}
                                  onChange={(e) => addTestGetOptionInputValue6(e.target.value)}
                                />
                              </label>
                              <span>

                                <span onClick={() => addTestSetOptionCorrect6(!add_test_is_option_6_correct)}>
                                  {
                                    add_test_is_option_6_correct ?
                                    <img src={plus} alt="plus"/>
                                    :
                                    <img src={minus} alt="minus"/>
                                  }
                                </span>
                              </span>
                            </div>
                          </>
                          :
                          ''
                        :
                        ''
                      }
                    </div>

                    <div className="form-add-question-rating">
                      {
                        add_test_lesson_input_value !== '' && add_test_options_count !== 0 ?
                        <label>
                          Оцінка за питання
                          <input
                            type="text"
                            value={add_test_question_rating}
                            onChange={(e) => addTestGetQuestionRating(e.target.value)}
                          />
                        </label>
                        :
                        ''
                      }

                    </div>

                  </div>
                  </>
                  :
                  ''
              }
            </div>

            <div className="form-add-question-button">
              {
                add_test_question_input_value !== '' && add_test_options_count !== 0 ?
                  <>
                  {
                    <>

                    {
                      add_test_options_count === 1 && add_test_option_input_value_1 !== '' ?
                      add_test_is_option_1_correct !== false ||
                      add_test_is_option_2_correct !== false ||
                      add_test_is_option_3_correct !== false ||
                      add_test_is_option_4_correct !== false ||
                      add_test_is_option_5_correct !== false ||
                      add_test_is_option_6_correct !== false ?
                      // eslint-disable-next-line
                        add_test_question_rating != 0 ?
                          <button
                            onClick={addTestAddNewQuestion}
                            className={button_disabled_bool ? "button--disabled" : "button"}
                            disabled={button_disabled_bool}
                          >
                            Додати питання
                          </button>
                            :
                            ''
                        :
                        ''
                    :
                    ''
                  }

                  {
                    add_test_options_count === 2 && add_test_option_input_value_1 !== ''
                    && add_test_option_input_value_2 !== '' ?
                      add_test_is_option_1_correct !== false ||
                      add_test_is_option_2_correct !== false ||
                      add_test_is_option_3_correct !== false ||
                      add_test_is_option_4_correct !== false ||
                      add_test_is_option_5_correct !== false ||
                      add_test_is_option_6_correct !== false ?
                      // eslint-disable-next-line
                        add_test_question_rating != 0 ?
                          <button
                            onClick={addTestAddNewQuestion}
                            className={button_disabled_bool ? "button--disabled" : "button"}
                            disabled={button_disabled_bool}
                          >
                            Додати питання
                          </button>
                          :
                          ''
                        :
                        ''
                    :
                    ''
                  }

                  {
                    add_test_options_count === 3 && add_test_option_input_value_1 !== ''
                    && add_test_option_input_value_2 !== '' && add_test_option_input_value_3 !== '' ?
                      add_test_is_option_1_correct !== false ||
                      add_test_is_option_2_correct !== false ||
                      add_test_is_option_3_correct !== false ||
                      add_test_is_option_4_correct !== false ||
                      add_test_is_option_5_correct !== false ||
                      add_test_is_option_6_correct !== false ?
                      // eslint-disable-next-line
                        add_test_question_rating != 0 ?
                          <button
                            onClick={addTestAddNewQuestion}
                            className={button_disabled_bool ? "button--disabled" : "button"}
                            disabled={button_disabled_bool}
                          >
                            Додати питання
                          </button>
                          :
                          ''
                        :
                        ''
                    :
                    ''
                  }

                  {
                    add_test_options_count === 4 && add_test_option_input_value_1 !== ''
                    && add_test_option_input_value_2 !== '' && add_test_option_input_value_3 !== ''
                    && add_test_option_input_value_4 !== '' ?
                      add_test_is_option_1_correct !== false ||
                      add_test_is_option_2_correct !== false ||
                      add_test_is_option_3_correct !== false ||
                      add_test_is_option_4_correct !== false ||
                      add_test_is_option_5_correct !== false ||
                      add_test_is_option_6_correct !== false ?
                      // eslint-disable-next-line
                        add_test_question_rating != 0 ?
                          <button
                            onClick={addTestAddNewQuestion}
                            className={button_disabled_bool ? "button--disabled" : "button"}
                            disabled={button_disabled_bool}
                          >
                            Додати питання
                          </button>
                          :
                          ''
                        :
                        ''
                    :
                    ''
                  }

                  {
                    add_test_options_count === 5 && add_test_option_input_value_1 !== ''
                    && add_test_option_input_value_2 !== '' && add_test_option_input_value_3 !== ''
                    && add_test_option_input_value_4 !== '' && add_test_option_input_value_5 !== ''?
                      add_test_is_option_1_correct !== false ||
                      add_test_is_option_2_correct !== false ||
                      add_test_is_option_3_correct !== false ||
                      add_test_is_option_4_correct !== false ||
                      add_test_is_option_5_correct !== false ||
                      add_test_is_option_6_correct !== false ?
                      // eslint-disable-next-line
                        add_test_question_rating != 0 ?
                          <button
                            onClick={addTestAddNewQuestion}
                            className={button_disabled_bool ? "button--disabled" : "button"}
                            disabled={button_disabled_bool}
                          >
                            Додати питання
                          </button>
                          :
                          ''
                        :
                        ''
                    :
                    ''
                  }

                  {
                    add_test_options_count === 6 && add_test_option_input_value_1 !== ''
                    && add_test_option_input_value_2 !== '' && add_test_option_input_value_3 !== ''
                    && add_test_option_input_value_4 !== '' && add_test_option_input_value_5 !== ''
                    && add_test_option_input_value_6 !== '' ?
                      add_test_is_option_1_correct !== false ||
                      add_test_is_option_2_correct !== false ||
                      add_test_is_option_3_correct !== false ||
                      add_test_is_option_4_correct !== false ||
                      add_test_is_option_5_correct !== false ||
                      add_test_is_option_6_correct !== false ?
                      // eslint-disable-next-line
                        add_test_question_rating != 0 ?
                          <button
                            onClick={addTestAddNewQuestion}
                            className={button_disabled_bool ? "button--disabled" : "button"}
                            disabled={button_disabled_bool}
                          >
                            Додати питання
                          </button>
                          :
                          ''
                        :
                        ''
                    :
                    ''
                  }
                    </>
                  }

                  </>

                :
                ''

              }

            </div>


            </div>

            <div className="admin-add-test__block_3">
              {
                add_test_questions_arr.length !== 0 ?
                  <>

                    <button
                      onClick={() => AddTestSetConfirmSentTestModalIsOpen(true)}
                      className={button_disabled_bool ? "test-button--disabled" : "test-button"}
                      disabled={button_disabled_bool}
                    >
                      Відправити тест учням
                    </button>

                    <button
                      onClick={addTestGetLessonTestDraft}
                      className={button_disabled_bool ? "button--disabled" : "button"}
                      disabled={button_disabled_bool}
                    >
                      Продивитись Тест
                    </button>

                    <Modal isOpen={add_test_confirm_sent_test_modal_isopen}>
                      <div className="send-test-modal-confirm-buttons">
                        <button
                          onClick={() => addTestPostNewTest(props.history)}
                          className={button_disabled_bool ? "test-button--disabled" : "test-button"}
                          disabled={button_disabled_bool}
                        >
                          Відправити тест учням
                        </button>

                        <button
                          onClick={() => AddTestSetConfirmSentTestModalIsOpen(false)}
                          className={button_disabled_bool ? "button--disabled" : "button"}
                          disabled={button_disabled_bool}
                        >
                          Відмінити
                        </button>
                      </div>
                    </Modal>
                  </>
                  :
                  ''
              }
            </div>
          </div>
          :
          <div className="preloader"><img src={loading} alt="loading"/> Loading...</div>
      }
      </Fade>
    </div>
  )
}

export default AdminAddTest;
