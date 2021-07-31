import React from 'react';
import Modal from 'react-modal';
import minus from '../../img/minus.svg';
import plus from '../../img/plus.svg';
import loading from '../../img/loading.svg';

import './AdminGroupLog.scss';

const AdminGroupLog = ({
  users, parts,
  a_group_log_retaking_mode_is_on, aGroupLogSetRetakingMode,
  aGroupLogOnClickRetakingUser,
  a_group_log_retaking_modal_is_open,
  a_group_log_retaking_user_data, aGroupLogRetakingModalClosed,
  button_disabled_bool, aGroupLogClearUserResult
}) => {

  const countResult = function(...item) {

    let items = item
    let result = 0;
    let step = 0;
    for (let o = 0; o < items[0].length; o++) {
      if (items[0][o][0] !== undefined) {
        result += +items[0][o][0].user_result;
        step += 1
      }
    }

    if (result !== 0) {
      return (result / step).toFixed(2);
    } else {
      return result
    }
  };

  return (
    <div className="page-container">
      <div className="admin-grop-log">

        <h2 className="admin-grop-log__title title_1">Журнал Групи</h2>

        {
          users !== null &&  parts !== null ?
          <div className="admin-grop-log__items">

              <div
                onClick={aGroupLogSetRetakingMode}
                className={a_group_log_retaking_mode_is_on ? "retaking-mode-on" : "retaking-mode-off"}
              >
                <div className="retaking-mode-container">
                  <span>Режим перездачі</span>
                  <img
                    src={
                      a_group_log_retaking_mode_is_on ?
                        plus
                        :
                        minus
                    }
                    alt="retaking mode"
                  />
                </div>

              </div>

            {
              parts.map(item =>
                <div className="admin-grop-log__item" key={Math.random()}>

                  <table border="1" key={item._id} className="admin-grop-log__table">
                    <caption><span>Тема:</span> {item.partName}</caption>
                    <thead>
                      <tr>
                        <th>№</th>
                        <th>Ім'я</th>
                        {
                          item.lessons.map(l =>
                            <th key={l.lesson_number+Math.random()} title={l.lesson_title}>
                              {l.lesson_number}
                            </th>
                          )
                        }
                        <th>Середній бал</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      users.filter(u => u.user_name !== 'Admin').sort((a, b) => a.user_fullname.localeCompare(b.user_fullname)).map((user, index) =>
                        <tr key={user.user_name+Math.random()}>
                          <td>{index + 1}</td>
                          <td>{user.user_fullname}</td>
                          {
                            item.lessons.map(les =>
                                <td
                                  key={Math.random()}
                                  className={
                                      les.lesson_test_results.length > 0 && a_group_log_retaking_mode_is_on ?
                                      les.lesson_test_results.map(lr => {
                                        if ( lr.user_name === user.user_name ) {
                                          return "retaking"
                                        } else {
                                          return null
                                        }
                                      }).filter(item => item !== null) :
                                      null
                                  }
                                  onClick={ () =>
                                    les.lesson_test_results.length > 0 && a_group_log_retaking_mode_is_on ?
                                      les.lesson_test_results.map((lr,index,arr) => {
                                        if ( lr.user_name === user.user_name ) {
                                          return aGroupLogOnClickRetakingUser(item._id, les.lesson_number, user.user_name)
                                        } else {
                                          return null
                                        }
                                      })
                                     :
                                    null
                                  }
                                >
                                  {
                                    les.lesson_test_results.length > 0 ?
                                    les.lesson_test_results.map(lr => {
                                      if ( lr.user_name === user.user_name ) {
                                        console.log(lr.user_result)
                                        return lr.user_result
                                      } else {
                                        return ''
                                      }
                                    }) :
                                    ''
                                  }
                                </td>
                            )
                          }
                          <td>
                            {
                              countResult(item.lessons.map(less => {return less.lesson_test_results.filter(ress => ress.user_name === user.user_name)}))
                            }
                          </td>
                        </tr>
                      )
                    }
                    </tbody>
                  </table>

                </div>
              )
            }
            <Modal isOpen={a_group_log_retaking_modal_is_open} onRequestClose={aGroupLogRetakingModalClosed}>
              <div className="retaking-confirm-modal">
                {
                  a_group_log_retaking_user_data !== null ?
                    <>
                      <h1 className="title_3 title ">
                        Підтвердити перездачу <span>{a_group_log_retaking_user_data.lesNumb}</span> уроку
                        учнем <span>{a_group_log_retaking_user_data.userName}</span>
                      </h1>
                      <div className="confirm-buttons">
                        <button
                          onClick={aGroupLogClearUserResult}
                          disabled={button_disabled_bool}
                          className={button_disabled_bool ? "button--disabled" : "button"}
                        >
                          Підтвердити
                        </button>
                        <button
                          onClick={aGroupLogRetakingModalClosed}
                          disabled={button_disabled_bool}
                          className={button_disabled_bool ? "test-button--disabled" : "test-button"}
                        >
                          Відмінити
                        </button>
                      </div>
                    </>
                    :
                    <div className="preloader"><img src={loading} alt="loading"/> Loading...</div>
                }
              </div>
            </Modal>
          </div>
          :
          <div className="preloader"><img src={loading} alt="loading"/> Loading...</div>
        }
      </div>
    </div>
  )
}

export default AdminGroupLog;
