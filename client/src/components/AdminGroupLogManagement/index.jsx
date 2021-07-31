import React from 'react';
import Modal from 'react-modal';
import loading from '../../img/loading.svg';

import './AdminGroupLogManagement.scss';

const AdminGroupLogManagement = ({
  users, button_disabled_bool,
  a_group_log_mng_edit_mode_is_on, a_group_log_mng_add_mode_is_on,
  aGroupLogMNGSetAddModeIsOn, aGroupLogMNGClearUserAddForm,
  aGroupLogMNGSetEditUserInformation, aGroupLogMNGClearUserEditForm,
  a_group_log_mng_user_fullname, GroupLogMNGSetUserFullName,
  a_group_log_mng_user_login, GroupLogMNGSetUserLogin,
  a_group_log_mng_user_password, GroupLogMNGSetUserPassword,
  a_group_log_mng_confirm_add_user_modal_is_open, aGroupLogMNGSetConfirmAddUserModalIsOpen,
  aGroupLogMNGSetDeleteUserInformation, aGroupLogMNGClearUserDeleteInformation,
  a_group_log_mng_confirm_delete_user_modal_is_open, aGroupLogMNGDeleteUser,
  a_group_log_mng_confirm_post_edited_user_modal_is_open, aGroupLogMNGSetConfirmPostEditedUserModalIsOpen,
  a_group_log_mng_edited_user_information,
  aGroupLogMNGAddNewUser, aGroupLogMNGPostEditedUser
}) => {
  return (
    <div className="page-container">
      <div className="admin-grop-log-management">
        <h2 className="title_1 admin-grop-log-management__title">Інформація Групи</h2>

        {
          users !== null  ?
          <div className="admin-grop-log-management__content">
            {
              !a_group_log_mng_edit_mode_is_on  && !a_group_log_mng_add_mode_is_on ?
                <div className="admin-grop-log-management__add-new-user-button">
                  <button
                    onClick={() => aGroupLogMNGSetAddModeIsOn(true)}
                    className="smoll-botton-control"
                  >
                    Додати нового учня
                  </button>
                </div>
                :
                ''
            }

            {
              a_group_log_mng_add_mode_is_on && !a_group_log_mng_edit_mode_is_on ?
              <div className="admin-grop-log-management__add-new-user-panel">
                <form className="add-new-user-form">
                  <h2 className="title_2">Додати нового учня</h2>
                  <label>
                    <span className='title_3'>Ім'я:</span>
                    <input
                      type="text"
                      value={a_group_log_mng_user_fullname}
                      onChange={(e) => GroupLogMNGSetUserFullName(e.target.value)}
                      placeholder="Впишіть Ім'я учня"
                    />
                  </label>

                  <label>
                    <span className='title_3'>Логін:</span>
                    <input
                      type="text"
                      value={a_group_log_mng_user_login}
                      onChange={(e) => GroupLogMNGSetUserLogin(e.target.value)}
                      placeholder="Впишіть Логін учня"
                    />
                  </label>

                  <label>
                    <span className='title_3'>Пароль:</span>
                    <input
                      type="text"
                      value={a_group_log_mng_user_password}
                      onChange={(e) => GroupLogMNGSetUserPassword(e.target.value)}
                      placeholder="Впишіть Пароль учня"
                    />
                  </label>

                  <div className="control-buttons">
                    <button
                      onClick={() => aGroupLogMNGSetConfirmAddUserModalIsOpen(true)}
                      className={
                        a_group_log_mng_user_fullname !== '' &&
                        a_group_log_mng_user_login !== '' &&
                        a_group_log_mng_user_password !== '' ?
                          'button'
                          :
                          'button--disabled'
                      }
                      disabled={
                        a_group_log_mng_user_fullname !== '' &&
                        a_group_log_mng_user_login !== '' &&
                        a_group_log_mng_user_password !== '' ?
                          false
                          :
                          true
                      }
                    >
                      Додати
                    </button>

                    <button
                      onClick={aGroupLogMNGClearUserAddForm}
                      className="test-button"
                    >
                      Відмінити
                    </button>
                  </div>

                </form>

                <Modal isOpen={a_group_log_mng_confirm_add_user_modal_is_open}>
                  <div className="add-new-user-confirm-modal">

                    <div className="new-user-information">
                      <h2 className="title_3">Додати учня:</h2>
                      <p>Ім'я: <span>{a_group_log_mng_user_fullname}</span></p>
                      <p
                        className={
                          users.filter(item => item.user_name === a_group_log_mng_user_login).length !== 0 ?
                            "error"
                            :
                            ""
                        }
                      >Логін: <span>{a_group_log_mng_user_login}</span></p>
                      <p>Пароль: <span>{a_group_log_mng_user_password}</span></p>
                    </div>

                    <div className="new-user-error">
                      {
                        users.filter(item => item.user_name === a_group_log_mng_user_login).length !== 0 ?
                          'Користувач з таким Логіном вже існує, змініть будь-ласка логін'
                          :
                          ''
                      }
                    </div>

                    <div className="control-buttons">

                      <button
                        onClick={aGroupLogMNGAddNewUser}
                        className={
                          users.filter(item => item.user_name === a_group_log_mng_user_login).length !== 0  || button_disabled_bool?
                            "button--disabled"
                            :
                            "button"
                        }
                        disabled={button_disabled_bool}
                      >
                        Додати
                      </button>

                      <button
                        onClick={() => aGroupLogMNGSetConfirmAddUserModalIsOpen(false)}
                        className={button_disabled_bool ? "test-button--disabled" : "test-button"}
                        disabled={button_disabled_bool}
                      >
                        Відмінити
                      </button>

                    </div>

                  </div>
                </Modal>
              </div>
              :
              ''
            }

            {
              a_group_log_mng_edit_mode_is_on && !a_group_log_mng_add_mode_is_on ?
                <>
                  <div className="admin-grop-log-management__edit-user-information-panel">
                    <h2 className="title_3">Редагування інформації учня</h2>
                    <label>
                      <span className="title_3">Ім'я:</span>
                      <input
                        type="text"
                        value={a_group_log_mng_user_fullname}
                        onChange={(e) => GroupLogMNGSetUserFullName(e.target.value)}
                        placeholder="Впишіть Ім'я учня"
                      />
                    </label>

                    <label>
                      <span className="title_3">Логін:</span>
                      <input
                        type="text"
                        value={a_group_log_mng_user_login}
                        onChange={(e) => GroupLogMNGSetUserLogin(e.target.value)}
                        placeholder="Впишіть Логін учня"
                      />
                    </label>

                    <label>
                      <span className="title_3">Пароль:</span>
                      <input
                        type="text"
                        value={a_group_log_mng_user_password}
                        onChange={(e) => GroupLogMNGSetUserPassword(e.target.value)}
                        placeholder="Впишіть Пароль учня"
                      />
                    </label>

                    <div className="control-button">
                      <button
                        onClick={() => aGroupLogMNGSetConfirmPostEditedUserModalIsOpen(true)}
                        className={
                          a_group_log_mng_user_fullname !== '' &&
                          a_group_log_mng_user_login !== '' &&
                          a_group_log_mng_user_password !== '' ?
                            'button'
                            :
                            'button--disabled'
                        }
                        disabled={
                          a_group_log_mng_user_fullname !== '' &&
                          a_group_log_mng_user_login !== '' &&
                          a_group_log_mng_user_password !== '' ?
                            false
                            :
                            true
                        }
                      >
                        Готово
                      </button>

                      <button
                        onClick={aGroupLogMNGClearUserEditForm}
                        className="test-button"
                      >
                        Відмінити
                      </button>
                    </div>

                  </div>

                  <Modal isOpen={a_group_log_mng_confirm_post_edited_user_modal_is_open}>

                    <div className="confirm-post-edited-user-modal">

                      <h2 className="title_2">Зберегти редаговану інформацю учня?</h2>

                      <div className="user-information">
                        <div className="user-prev-information">
                          <h2 className="title_3">Попередня інформація</h2>
                          {
                            a_group_log_mng_edited_user_information !== null ?
                              <>
                                <div>
                                  Ім'я:
                                  <span
                                    className={
                                      a_group_log_mng_edited_user_information.user_fullname !== a_group_log_mng_user_fullname ?
                                        'different'
                                        :
                                        ''
                                    }
                                  >
                                    {a_group_log_mng_edited_user_information.user_fullname}
                                  </span>
                                </div>

                                <div>
                                  Логін:
                                  <span
                                    className={
                                      a_group_log_mng_edited_user_information.user_name !== a_group_log_mng_user_login ?
                                        'different'
                                        :
                                        ''
                                    }
                                  >
                                    {a_group_log_mng_edited_user_information.user_name}
                                  </span>
                                </div>

                                <div>
                                  Пароль:
                                  <span
                                    className={
                                      a_group_log_mng_edited_user_information.user_password !== a_group_log_mng_user_password ?
                                        'different'
                                        :
                                        ''
                                    }
                                  >
                                    {a_group_log_mng_edited_user_information.user_password}
                                  </span>
                                </div>
                              </>
                              :
                              ''
                          }

                        </div>

                        <div className="user-new-information">
                          <h2 className="title_3">Нова інформація</h2>

                          <div>
                            Ім'я:
                            <span
                              className={
                                a_group_log_mng_edited_user_information !== null ?
                                  a_group_log_mng_edited_user_information.user_fullname !== a_group_log_mng_user_fullname ?
                                    'different'
                                    :
                                    ''
                                :
                                ''
                              }
                            >
                              {a_group_log_mng_user_fullname}
                            </span>
                          </div>

                          <div>
                            Логін:
                            <span
                              className={
                                a_group_log_mng_edited_user_information !== null ?
                                  a_group_log_mng_edited_user_information.user_name !== a_group_log_mng_user_login ?
                                    'different'
                                    :
                                    ''
                                :
                                ''
                              }
                            >
                              {a_group_log_mng_user_login}
                            </span>
                          </div>

                          <div>
                            Пароль:
                            <span
                              className={
                                a_group_log_mng_edited_user_information !== null ?
                                  a_group_log_mng_edited_user_information.user_password !== a_group_log_mng_user_password ?
                                    'different'
                                    :
                                    ''
                                :
                                ''
                              }
                            >
                              {a_group_log_mng_user_password}
                            </span>
                          </div>

                        </div>
                      </div>

                      <div className="user-information-error">

                        {
                          JSON.stringify(a_group_log_mng_edited_user_information) ===
                          JSON.stringify({
                            user_name: a_group_log_mng_user_login,
                            user_password: a_group_log_mng_user_password,
                            user_fullname: a_group_log_mng_user_fullname}) ?
                            'Інформація не змінилась'
                            :
                            ''
                        }

                      </div>

                      <div className="control-button">
                        <button
                          onClick={aGroupLogMNGPostEditedUser}
                          className={
                            JSON.stringify(a_group_log_mng_edited_user_information) ===
                            JSON.stringify({
                              user_name: a_group_log_mng_user_login,
                              user_password: a_group_log_mng_user_password,
                              user_fullname: a_group_log_mng_user_fullname}) || button_disabled_bool ?
                              'button--disabled'
                              :
                              'button'
                          }
                          disabled={
                            JSON.stringify(a_group_log_mng_edited_user_information) ===
                            JSON.stringify({
                              user_name: a_group_log_mng_user_login,
                              user_password: a_group_log_mng_user_password,
                              user_fullname: a_group_log_mng_user_fullname}) || button_disabled_bool ?
                              true
                              :
                              false
                          }
                        >
                          Зберегти
                        </button>

                        <button
                          className={button_disabled_bool ? "test-button--disabled" : "test-button"}
                          disabled={button_disabled_bool}
                          onClick={() => aGroupLogMNGSetConfirmPostEditedUserModalIsOpen(false)}
                        >
                          Відмінити
                        </button>
                      </div>

                    </div>

                  </Modal>

                </>
                :
                ''
            }


            <table border="1">

              <thead>
                <tr>
                  <th>№</th>
                  <th>Ім'я</th>
                  <th>Логін</th>
                  <th>Пароль</th>
                  <th>Редагування</th>
                  <th>Видалення</th>
                </tr>
              </thead>
              <tbody>
              {
                users.filter(u => u.user_name !== 'Admin').sort((a, b) => a.user_fullname.localeCompare(b.user_fullname)).map((user, index) =>
                  <tr key={user.user_name+Math.random()} className="user-information">
                    <td>{index + 1}</td>
                    <td>{user.user_fullname}</td>
                    <td>{user.user_name}</td>
                    <td>{user.user_password}</td>
                    <td>
                      <button
                        className={a_group_log_mng_edit_mode_is_on || a_group_log_mng_add_mode_is_on ? "edit-user-button--disabled" : "edit-user-button"}
                        onClick={
                          a_group_log_mng_edit_mode_is_on || a_group_log_mng_add_mode_is_on ?
                            null
                            :
                            () => aGroupLogMNGSetEditUserInformation(user.user_fullname, user.user_name, user.user_password)
                        }
                        disabled={
                          a_group_log_mng_edit_mode_is_on || a_group_log_mng_add_mode_is_on ?
                            true
                            :
                            false
                        }
                      >
                        редагувати
                      </button>

                    </td>

                    <td>
                      <button
                        className={a_group_log_mng_edit_mode_is_on || a_group_log_mng_add_mode_is_on ? "delete-user-button--disabled" : "delete-user-button"}
                        onClick={
                          a_group_log_mng_edit_mode_is_on || a_group_log_mng_add_mode_is_on ?
                            null
                            :
                            () => aGroupLogMNGSetDeleteUserInformation(user.user_fullname, user.user_name, user.user_password)
                        }
                      >
                        видалити
                      </button>

                    </td>

                  </tr>
                )
              }
              </tbody>
            </table>

            <Modal isOpen={a_group_log_mng_confirm_delete_user_modal_is_open}>
              <div className='a-group-log-mng-delete-user-modal'>

                <h2 className="title_2">Видалити учня:</h2>

                <p>
                  Ім'я:
                  <span>
                    {a_group_log_mng_user_fullname}
                  </span>
                </p>

                <p>
                  Логін:
                  <span>
                    {a_group_log_mng_user_login}
                  </span>
                </p>

                <p>
                  Пароль:
                  <span>
                    {a_group_log_mng_user_password}
                  </span>
                </p>

                <div className="control-buttons">

                  <button
                    className={button_disabled_bool ? "button--disabled" : "button"}
                    onClick={aGroupLogMNGDeleteUser}
                  >
                    Видалити
                  </button>

                  <button
                    className={button_disabled_bool ? "test-button--disabled" : "test-button"}
                    onClick={aGroupLogMNGClearUserDeleteInformation}
                  >
                    Відмінити
                  </button>

                </div>
              </div>
            </Modal>

          </div>
          :
          <div className="preloader"><img src={loading} alt="loading"/> Loading...</div>
        }
      </div>
    </div>
  )
};

export default AdminGroupLogManagement
