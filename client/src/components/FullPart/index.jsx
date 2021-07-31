import React from 'react';
import loading from '../../img/loading.svg';

import './FullPart.scss';

const FullPart = ({
  part, fetchLesson, fetchLessonTest, user_logined_data, admin_logined, user_logined,
  fetchEditLesson, ...props
}) => {
  return (
    <div className="page-container">

        <div className="full-part">
          <h3 className="full-part__title title_2">Уроки</h3>
        {
          part !== null ?
            part.lessons.map(item =>
              <div key={Math.random()} className="full-part__container">

                <button
                  onClick={() => fetchLesson(part.partNumber, item.lesson_number, props.history)}
                  className="button full-part__lesson-button"
                >
                  {item.lesson_title}
                </button>

                {
                  admin_logined ?
                    <button
                      onClick={() => fetchEditLesson(part.partNumber, item.lesson_number, part._id, props.history)}
                      className="edit-button full-part__edit-button"
                    >
                      Редагувати
                    </button>
                    :
                    ''
                }


                {
                  item.lesson_test.length > 0  && user_logined ?
                    item.lesson_test_results.filter(res => res.user_name === user_logined_data[0].user_name).length === 0 ?
                      <button
                        onClick={() => fetchLessonTest(part.partNumber, item.lesson_number, props.history)}
                        className="test-button full-part__test-button"
                      >
                        {item.lesson_title} TEST
                      </button>
                    :
                    ''
                  :
                    ''
                }

                {
                  admin_logined && item.lesson_test.length > 0 ?

                      <button
                        onClick={() => fetchLessonTest(part.partNumber, item.lesson_number, props.history)}
                        className="test-button full-part__test-button"
                      >
                        {item.lesson_title} TEST
                      </button>

                  :
                    ''

                }

              </div>

            )
            :
          <div className="preloader"><img src={loading} alt="loading"/> Loading...</div>
        }
        </div>

    </div>
  )
}

export default FullPart;
