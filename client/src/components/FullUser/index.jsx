import React from 'react';
import Fade from 'react-reveal/Fade';
import loading from '../../img/loading.svg';
import './FullUser.scss';

const FullUser = ({ user_logined_data, parts }) => {

  const countResult = function(...item) {
    let items = item

    let result = 0;
    let step = 0;
    for (let o = 0; o < items[0].length; o++) {
      if (items[0][o][0] !== undefined) {
        result += +items[0][o][0].user_result;
        step += 1;
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
      <Fade left>
        <h1 className="title_1">Журнал</h1>
      </Fade>
      <div className="user-log">
        {
          user_logined_data !== null &&  parts !== null ?
          <>
            {
              parts.map(item =>
                <div className="user-log__table title_2">
                <Fade>
                  <table border="1" key={item._id} >
                    <caption className=""><span>Тема:</span> {item.partName}</caption>
                    <thead>
                      <tr>
                        <th>Ім'я</th>
                        {
                          item.lessons.map(l =>
                            <th key={Math.random()} title={l.lesson_title}>
                              {l.lesson_number}
                            </th>
                          )
                        }
                        <th>Середній бал</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      user_logined_data.filter(u => u.user_name !== 'Admin').map(user =>
                        <tr key={Math.random()}>
                          <td>{user.user_fullname}</td>
                          {
                            item.lessons.map(les =>
                              <td key={Math.random()}>
                                {
                                  les.lesson_test_results.length > 0 ?
                                  les.lesson_test_results.map(lr => {
                                    if ( lr.user_name === user.user_name ) {
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
                </Fade>
                </div>
              )
            }
          </>
          :
          <div className="preloader"><img src={loading} alt="loading"/> Loading...</div>
        }
      </div>
    </div>
  )
}

export default FullUser;
