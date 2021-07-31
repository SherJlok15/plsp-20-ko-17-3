import React from 'react';
import Fade from 'react-reveal/Fade';
import './AdminFullTest.scss';

const AdminFullTest = ({ lesson_test_data }) => {
  return (
    <div className="page-container">
      <Fade>
      {
          <div className="admin-full-test">
            <h3 className="admin-full-test__title title_1">
              {lesson_test_data[0].lesson_title} <span>Test</span>
            </h3>
            <div className="admin-full-test__items">
              {
                lesson_test_data[0].lesson_test.map(q =>
                  <div key={q.question_id} className="admin-full-test__item">

                    <div className="item-rating">
                      <h5>{q.question_rating} Балів за питання</h5>
                    </div>

                    <div className="item-text">
                      <h4 className="title_2">{q.question_text}</h4>
                    </div>

                    <div className="item-max-answers">
                      <p >максимум {q.question_answers.length} варіант(-ти)</p>
                    </div>


                    <div className="options-container">
                      {
                        q.question_options.map(opt =>
                          <span
                            key={Math.random()}
                            className="option"
                          >

                            {opt}
                          </span>
                        )
                      }
                    </div>
                  </div>
                )
              }
            </div>
          </div>
      }
      </Fade>
    </div>
  )
}

export default AdminFullTest;
