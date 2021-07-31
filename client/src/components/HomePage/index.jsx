import React from 'react';
import { Link } from 'react-router-dom';
import { News } from '../';
import loading from '../../img/loading.svg';
import Fade from 'react-reveal/Fade';
import './HomePage.scss';



const HomePage = ({
  admin_logined, parts,
  users, user_logined, user_logined_data,
  form_user_name, getUserNameValue, form_user_name_errors,
  form_user_password, getUserPasswordValue, form_user_password_errors,
  onSubmitLoginForm, news, deleteNews
 }) => {
  return (
    <div className="page-container">
      {
        users !== null && parts !== null?
          user_logined ?
            user_logined_data.length > 0 ?
              <div className="user-home-page">
                <Fade>
                  <div className="user-home-page__item">
                    <Link to="/parts/" className="button">Теми</Link>
                  </div>
                </Fade>
                <News news={news}/>
              </div>
              :
              <div className="preloader"><img src={loading} alt="loading"/> Loading...</div>

            :
            admin_logined ?
            <div className="admin-home-page">
              <Fade>
                <div className="admin-home-page__admin-panel-link">
                  <Link to="/admin/" className="button">Панель Вчителя</Link>
                </div>
              </Fade>

              <News news={news} admin_logined={admin_logined} deleteNews={deleteNews}/>
            </div>
             :
            <div className="login-page">
              <Fade top>
                <form onSubmit={(e) => onSubmitLoginForm(e)} className="login-page__login-form">
                  <h1 className="title_1">Форма Логіна</h1>

                  <div className="login-page__item">
                    <label >
                      <span>
                        Логін:
                      </span>

                      <input
                        type="text"
                        value={form_user_name}
                        onChange={(e) => getUserNameValue(e.target.value)}
                        placeholder="Введіть логін"
                      />
                    </label>
                    <div className="login-error">
                      {form_user_name_errors}
                    </div>
                  </div>

                  <div className="login-page__item">
                    <label>
                      <span>
                        Пароль:
                      </span>

                      <input
                        type="password"
                        value={form_user_password}
                        onChange={(e) => getUserPasswordValue(e.target.value)}
                        placeholder="Введіть пароль"
                      />
                    </label>
                    <div className="login-error">
                      {form_user_password_errors}
                    </div>
                  </div>

                  <button className="login-page__login-button button">Увійти</button>
                </form>
              </Fade>
            </div>
        : <div className="preloader"><img src={loading} alt="loading"/> Loading...</div>
      }
    </div>
  )
}

export default HomePage;
