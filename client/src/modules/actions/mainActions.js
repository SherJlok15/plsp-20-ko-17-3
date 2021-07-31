import { partsApi } from '../../utils/api';

const mainActions = {

  clearApp: () => ({
    type: 'CLEAR_APP'
  }),

  setButtonDisabledBool: (bool) => ({
    type: 'SET_BUTTON_DISABLED_BOOL',
    payload: bool
  }),

  setHelpModalIsOpenBool: (bool) => ({
    type: 'SET_HELP_MODAL_IS_OPEN_BOOL',
    payload: bool
  }),

  setHelpModalInformation: (value) => ({
    type: 'SET_HELP_MODAL_INFORMATION',
    payload: value
  }),

  setHelpModalTimer: (value) => ({
    type: 'SET_HELP_MODAL_TIMER',
    payload: value
  }),

  startHelpModalTimer: (value) => (dispatch, getState) => {
    dispatch(mainActions.setHelpModalTimer(value))
    dispatch(mainActions.setHelpModalIsOpenBool(true))

    let timerId = setTimeout(function run() {
      const time = getState().mainReducer.help_modal_timer;
      if (time !== 1) {
        dispatch(mainActions.setHelpModalTimer(+time - 1));
        setTimeout(run, 1000);
      } else {
        dispatch(mainActions.setHelpModalIsOpenBool(false));
        dispatch(mainActions.setHelpModalInformation([]));
        clearTimeout(timerId)
      }
    }, 1000);

  },

  helpModalChangePage: (url, history) => (dispatch, getState) => {
    history.push(url);
    dispatch(mainActions.startHelpModalTimer(1));
  },

  //news

  setNews: (item) => ({
    type: 'SET_NEWS',
    payload: item
  }),

  fetchNews: () => dispatch => {
    partsApi.getNews()
      .then(({ data }) => {
        dispatch(mainActions.setNews(data))
      })
  },

  getNewsInputValue: (value) => ({
    type: 'GET_NEWS_INPUT_VALUE',
    payload: value
  }),

  postNewNews: (e, history) => (dispatch, getState) => {
    e.preventDefault();
    const news_author = 'admin';
    const news_text = getState().mainReducer.add_news_text

    const newNews = {
      news: {
        news_author,
        news_text
      }
    }
    partsApi.postNews(newNews).then(() => {
      dispatch(mainActions.clearAddNewsForm());
      dispatch(mainActions.fetchNews());
      history.push('/')
      dispatch(mainActions.setHelpModalInformation([{
        title: "Новину додано"
      }]));
      dispatch(mainActions.startHelpModalTimer(3));
    })

  },

  clearAddNewsForm: () => ({
    type: 'CLEAR_ADD_NEWS_FORM'
  }),

  deleteNews: (id) => dispatch => {
    partsApi.deleteNews(id).then(() => {
      dispatch(mainActions.fetchNews());
    })
  },

  // Admin
  //>add lesson
  getPartInputValue: (value, lesson_lenght, id) => ({
    type: 'GET_PART_INPUT_VALUE',
    payload: {value,lesson_lenght,id}
  }),

  getNewPartTitleValue: (value) => ({
    type: 'GET_NEW_PART_TITLE_VALUE',
    payload: value
  }),

  getLessonModuleType: (value) => ({
    type: 'GET_LESSON_MODULE_TYPE',
    payload: value
  }),

  getLessonTitle: (value) => ({
    type: 'GET_LESSON_TITLE',
    payload: value
  }),

  setLessonModuleType: value => (dispatch) => {
    dispatch(mainActions.clearLessonModuleValues());
    dispatch(mainActions.getLessonModuleType(value));
  },

  clearLessonModuleValues: () => ({
    type: 'CLEAR_LESSON_MODULE_VALUES'
  }),

  getLessonModuleTextInputValue: (value) => ({
    type: 'GET_LESSON_MODULE_TEXT_INPUT_VALUE',
    payload: value
  }),

  getLessonModuleImgInputValue: (value) => ({
    type: 'GET_LESSON_MODULE_IMG_INPUT_VALUE',
    payload: value
  }),
  getLessonModuleTitleBigInputValue: (value) => ({
    type: 'GET_LESSON_MODULE_TITLEBIG_INPUT_VALUE',
    payload: value
  }),

  getLessonModuleTitleSmollInputValue: (value) => ({
    type: 'GET_LESSON_MODULE_TITLESMOLL_INPUT_VALUE',
    payload: value
  }),

  getLessonModuleVideoInputValue: (value) => ({
    type: 'GET_LESSON_MODULE_VIDEO_INPUT_VALUE',
    payload: value
  }),

  setLessonModuleCount: (value) => ({
    type: 'SET_LESSON_MODULE_COUNT',
    payload: value
  }),

  setLessonModules: (value) => ({
    type: 'SET_LESSON_MODULES',
    payload: value
  }),

  clearAddLessonContent: () => ({
    type: 'CLEAR_ADD_LESSON_CONTENT'
  }),

  addLessonModuleToModules: (e) => (dispatch, getState) => {
    e.preventDefault();
    const lessonModulesArr = getState().mainReducer.add_lesson_lesson_modules;
    const module_number = getState().mainReducer.add_lesson_module_counter + 1;
    const module_type = getState().mainReducer.add_lesson_lesson_module_type;
    const module_value = getState().mainReducer.add_lesson_lesson_module_type === 'text' ?
                        getState().mainReducer.add_lesson_module_text_input_value :
                        getState().mainReducer.add_lesson_lesson_module_type === 'img' ?
                        getState().mainReducer.add_lesson_module_img_input_value :
                        getState().mainReducer.add_lesson_lesson_module_type === 'title_big' ?
                        getState().mainReducer.add_lesson_module_title_big_input_value :
                        getState().mainReducer.add_lesson_lesson_module_type === 'title_smoll' ?
                        getState().mainReducer.add_lesson_module_title_smoll_input_value :
                        getState().mainReducer.add_lesson_lesson_module_type === 'video' ?
                        getState().mainReducer.add_lesson_module_video_input_value : ''
    const newModul = {
      module_number,
      module_type,
      module_value,
    }

    lessonModulesArr.push(newModul)
    dispatch(mainActions.setLessonModuleCount(module_number));
    dispatch(mainActions.setLessonModules(lessonModulesArr));
    dispatch(mainActions.clearAddLessonContent());
  },

  //> modal
  setNewLessonModalIsOpen: (value) => ({
    type: 'SET_NEW_LESSON_MODAL_ISOPEN',
    payload: value,
  }),

  newLessonModalDeleteItem: (item_index) => (dispatch, getState) => {
    const newLessonModulesArr = getState().mainReducer.add_lesson_lesson_modules.filter((item, index ) => index !== item_index);
    newLessonModulesArr.map((item, index) => {
      item.module_number = index + 1;
      return item
    })
    dispatch(mainActions.setLessonModuleCount(newLessonModulesArr.length));
    dispatch(mainActions.setLessonModules(newLessonModulesArr));
  },

  newLessonModalMoveItemDown: (item_index) => (dispatch, getState) => {
    const removedItem = getState().mainReducer.add_lesson_lesson_modules.filter((item, index) => index === item_index);
    const newIndex = item_index + 1;
    const newLessonModulesArr = getState().mainReducer.add_lesson_lesson_modules.filter((item, index ) => index !== item_index);
    newLessonModulesArr.splice(newIndex, 0, removedItem[0]);
    newLessonModulesArr.map((item, index) => {
      item.module_number = index + 1;
      return item
    })
    dispatch(mainActions.setLessonModules(newLessonModulesArr));
  },

  newLessonModalMoveItemUp: (item_index) => (dispatch, getState) => {
    const removedItem = getState().mainReducer.add_lesson_lesson_modules.filter((item, index) => index === item_index);
    const newIndex = item_index - 1;
    const newLessonModulesArr = getState().mainReducer.add_lesson_lesson_modules.filter((item, index ) => index !== item_index)
    newLessonModulesArr.splice(newIndex, 0, removedItem[0]);
    newLessonModulesArr.map((item, index) => {
      item.module_number = index + 1;
      return item
    })
    dispatch(mainActions.setLessonModules(newLessonModulesArr));
  },

  postNewLesson: (history) => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true));
    const partId = getState().mainReducer.add_lesson_part_id;
    const newPartTitle = getState().mainReducer.add_lesson_new_part_title;
    const lesson_number = getState().mainReducer.add_lesson_count_lessons_in_part + 1;
    const lesson_title = getState().mainReducer.add_lesson_lesson_title;
    const lesson_text = getState().mainReducer.add_lesson_lesson_modules;
    const lesson_test = [];
    const lesson_test_draft = [];
    const lesson_test_results = []
    const newLesson = {
      lesson_number,
      lesson_title,
      lesson_text,
      lesson_test,
      lesson_test_draft,
      lesson_test_results
    };
    if (partId === 0) {
      partsApi.postNewLesson(partId, newLesson, newPartTitle)
        .then(() => {
          const partUrl = partId !== 0 ? partId : ''
          history.push('/parts/'+partUrl);
          dispatch(mainActions.clearAddLessonForm());
          dispatch(mainActions.fetchParts());
          dispatch(mainActions.setAddLessonConfirmModalIsOpen(false));
          dispatch(mainActions.setButtonDisabledBool(false));
          dispatch(mainActions.setHelpModalInformation([{
            title: "Урок відправленно"
          }]));
          dispatch(mainActions.startHelpModalTimer(3));
        });
    } else {
      partsApi.postNewLesson(partId, newLesson)
      .then(() => {
        const partUrl = partId !== 0 ? partId : ''
        history.push('/parts/'+partUrl);
        dispatch(mainActions.clearAddLessonForm());
        dispatch(mainActions.fetchParts());
        dispatch(mainActions.setAddLessonConfirmModalIsOpen(false));
        dispatch(mainActions.setButtonDisabledBool(false));
        dispatch(mainActions.setHelpModalInformation([{
          title: "Урок відправленно"
        }]));
        dispatch(mainActions.startHelpModalTimer(3));
      });
    }
  },

  cancelPostNewLesson: (history) => (dispatch) => {
    dispatch(mainActions.setAddLessonConfirmModalIsOpen(false));
  },

  clearAddLessonForm: () => ({
    type: 'CLEAR_ADD_LESSON_FORM'
  }),

  setAddLessonConfirmModalIsOpen: (value) => ({
    type: 'SET_ADD_LESSON_CONFIRM_MODAL_ISOPEN',
    payload: value
  }),

  // Parts
  fetchParts: () => (dispatch) => {
    partsApi.getParts()
      .then(({ data }) => {
        dispatch(mainActions.setParts(data))
      })
  },
  setParts: (item) => ({
    type: 'SET_PARTS',
    payload: item
  }),

  //Full part
  fetchPart: (id) => (dispatch) => {
    partsApi.getPart(id)
      .then(({ data }) => {
        dispatch(mainActions.setPart(data))
      })
  },

  setPart: (item) => ({
    type: 'SET_PART',
    payload: item
  }),

  clearPart: () => ({
    type: 'CLEAR_PART'
  }),

  //Users
  fetchUsers: () => (dispatch) => {
    partsApi.getUsers()
      .then(({ data }) => {
        dispatch(mainActions.setUsers(data))
      })
  },
  setUsers: (item) => ({
    type: 'SET_USERS',
    payload: item
  }),

  // lessons

  setLesson: (item) => ({
    type: 'SET_LESSON',
    payload: item
  }),

  fetchLesson: (part, lesson, history) => (dispatch, getState) => {
    const lessonData = getState().mainReducer.parts.filter(item => item.partNumber === part)[0].lessons.filter(item => item.lesson_number === lesson)
    dispatch(mainActions.setLesson(lessonData));
    history.push('/lesson/')
  },



  //Login form

  clearFormInputs: () => ({
    type: 'CLEAR_FORM_INPUTS'
  }),

  setUserLogined: (value, user) => ({
    type: 'SET_USER_LOGINED',
    payload: {value, user}
  }),

  setAdminLogined: (value) => ({
    type: 'SET_ADMIN_LOGINED',
    payload: value
  }),

    //> name

  getUserNameValue: (value) => ({
    type: 'GET_USER_NAME_VALUE',
    payload: value
  }),

  setUserNameError: (err) => ({
    type: 'SET_USER_NAME_ERROR',
    payload: err
  }),

  setUserNameValid: (value) => ({
    type: 'SET_USER_NAME_VALID',
    payload: value
  }),

    //> password

  getUserPasswordValue: (value) => ({
    type: 'GET_USER_PASSWORD_VALUE',
    payload: value
  }),

  setUserPasswordError: (err) => ({
    type: 'SET_USER_PASSWORD_ERROR',
    payload: err
  }),

  setUserPasswordValid: (value) => ({
    type: 'SET_USER_PASSWORD_VALID',
    payload: value
  }),

    //> on submit

  onSubmitLoginForm: (e) => (dispatch, getState) => {
    e.preventDefault();
    if (getState().mainReducer.form_user_name.length > 0) {
      const user = getState().mainReducer.users.filter(item => item.user_name === getState().mainReducer.form_user_name)
      if (user.length > 0) {
        dispatch(mainActions.setUserNameValid(true))
        dispatch(mainActions.setUserNameError(''))
      } else {
        dispatch(mainActions.setUserNameValid(false))
        dispatch(mainActions.setUserNameError('User is not found'))
      }
    } else {
      dispatch(mainActions.setUserNameError('Name input required'))
    }

    if (getState().mainReducer.form_user_password.length > 0) {
      const user = getState().mainReducer.users.filter(item => item.user_password === getState().mainReducer.form_user_password && item.user_name === getState().mainReducer.form_user_name)
      if (user.length > 0) {
        dispatch(mainActions.setUserPasswordValid(true))
        dispatch(mainActions.setUserPasswordError(''))
      } else {
        dispatch(mainActions.setUserPasswordValid(false))
        dispatch(mainActions.setUserPasswordError('Wrong password or user name'))
      }
    } else {
      dispatch(mainActions.setUserPasswordError('Password input required'))
    }

    if (getState().mainReducer.form_user_name_valid && getState().mainReducer.form_user_password_valid) {
        const userName = getState().mainReducer.users.filter(item => item.user_name === getState().mainReducer.form_user_name);
        const userPassword = getState().mainReducer.users.filter(item => item.user_password === getState().mainReducer.form_user_password && item.user_name === getState().mainReducer.form_user_name);
        const parts = getState().mainReducer.parts;

        let userToDoList = [];

        parts.map(part => {
          part.lessons.map(les => {
            if (les.lesson_test.length > 0) {
              let userCompliteTest = les.lesson_test_results.filter(item => item.user_name === userName[0].user_name).length > 0 ? true : false;

              if (!userCompliteTest) {
                userToDoList.push({
                  part: part.partNumber,
                  lesson: les.lesson_title,
                  url: `/parts/${part._id}`
                })
              }

            }
            return les
          })
          return part
        })


        if (userName.user_name === userPassword.user_name && userName.user_password === userPassword.user_password) {
          if (userName[0].user_name === 'Admin') {
            dispatch(mainActions.setAdminLogined(true));
            dispatch(mainActions.clearFormInputs());
          } else {
            dispatch(mainActions.setUserLogined(true, userName));
            dispatch(mainActions.clearFormInputs());
            if (userToDoList.length !== 0) {
              dispatch(mainActions.setHelpModalInformation([{
                title: "Завдання які необхідно виконати:",
                text: userToDoList.map(item => {
                  return {
                    text_title: `Тема: ${item.part} -> Урок: ${item.lesson}`,
                    text_content: 'Пройти Тестування',
                    url: item.url
                  }
                }),

              }]));
              dispatch(mainActions.startHelpModalTimer(30));
            }

          }

        } else {
          console.log(userName.user_name === userPassword.user_name && userName.user_password === userPassword.user_password)
        }
    }
  },

  // admin delete panel

  setDeletePanelDeletePartModalIsOpen: (value) => ({
    type: 'SET_DELETE_PANEL_DELETE_PART_MODAL_ISOPEN',
    payload: value
  }),

  setDeletePanelDeletePartID: (id) => ({
    type: 'SET_DELETE_PANEL_DELETE_PART_ID',
    payload: id
  }),

  deletePanelOnClickDeletePart: (id, value) => (dispatch) => {
    dispatch(mainActions.setDeletePanelDeletePartID(id));
    dispatch(mainActions.setDeletePanelDeletePartModalIsOpen(value))
  },

  deletePanelOnDeletePart: () => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true));
    partsApi.deletePart(getState().mainReducer.delete_panel_delete_part_id).then(() => {
      partsApi.sortParts().then((data) => {
        if (data.statusText === 'OK') {
          dispatch(mainActions.setDeletePanelDeletePartID(null));
          dispatch(mainActions.setDeletePanelDeletePartModalIsOpen(false))
          dispatch(mainActions.fetchParts());
          dispatch(mainActions.setButtonDisabledBool(false));
          dispatch(mainActions.setHelpModalInformation([{
            title: "Тему видаленно"
          }]));
          dispatch(mainActions.startHelpModalTimer(3));
        }
      })
    })
  },

  setDeletePanelDeleteLessonIndex: (index) => ({
    type: 'SET_DELETE_PANEL_DELETE_LESSON_INDEX',
    payload: index
  }),

  setDeletePanelDeleteLessonModalIsOpen: (value) => ({
    type: 'SET_DELETE_PANEL_DELETE_LESSON_MODAL_ISOPEN',
    payload: value
  }),

  deletePanelOnClickDeleteLesson: (id, lesson_index, value) => (dispatch) => {
    dispatch(mainActions.setDeletePanelDeletePartID(id));
    dispatch(mainActions.setDeletePanelDeleteLessonIndex(lesson_index));
    dispatch(mainActions.setDeletePanelDeleteLessonModalIsOpen(value))
  },

  deletePanelOnDeleteLesson: () => (dispatch, getState) => {
      partsApi.deleteLesson(getState().mainReducer.delete_panel_delete_part_id, getState().mainReducer.delete_panel_delete_lesson_index)
        .then(() => {
          dispatch(mainActions.setDeletePanelDeletePartID(null));
          dispatch(mainActions.setDeletePanelDeleteLessonIndex(null));
          dispatch(mainActions.fetchParts());
          dispatch(mainActions.setDeletePanelDeleteLessonModalIsOpen(false));
          dispatch(mainActions.setHelpModalInformation([{
            title: "Урок видаленно"
          }]));
          dispatch(mainActions.startHelpModalTimer(3));
        })
  },

  setDeletePanelDeleteTestModalIsOpen: (value) => ({
    type: 'SET_DELETE_PANEL_DELETE_TEST_MODAL_ISOPEN',
    payload: value
  }),

  deletePanelOnClickDeleteTest: (id, lesson_index, value) => (dispatch) => {
    dispatch(mainActions.setDeletePanelDeletePartID(id));
    dispatch(mainActions.setDeletePanelDeleteLessonIndex(lesson_index));
    dispatch(mainActions.setDeletePanelDeleteTestModalIsOpen(value))
  },

  deletePanelOnDeleteTest: () => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true));
      partsApi.deleteTest(getState().mainReducer.delete_panel_delete_part_id, getState().mainReducer.delete_panel_delete_lesson_index)
        .then(() => {
          dispatch(mainActions.setDeletePanelDeletePartID(null));
          dispatch(mainActions.setDeletePanelDeleteLessonIndex(null));
          dispatch(mainActions.fetchParts());
          dispatch(mainActions.setDeletePanelDeleteTestModalIsOpen(false))
          dispatch(mainActions.setButtonDisabledBool(false));
          dispatch(mainActions.setHelpModalInformation([{
            title: "Тест видаленно"
          }]));
          dispatch(mainActions.startHelpModalTimer(3));
        })
  },

  //test page

  setLessonTest: (item) => ({
    type: 'SET_LESSON_TEST',
    payload: item
  }),

  fetchLessonTest: (part, lesson, history) => (dispatch, getState) => {
    const lessonTestData = getState().mainReducer.parts.filter(item => item.partNumber === part)[0].lessons.filter(item => item.lesson_number === lesson)
    dispatch(mainActions.setLessonTest(lessonTestData));
    history.push('/test/')
  },

  setUserStartedTest: (value) => ({
    type: 'SET_USER_STARTED_TEST',
    payload: value
  }),

  testSetTestUserResultsArr: (arr) => ({
    type: 'TEST_SET_TEST_USER_RESULTS_ARR',
    payload: arr
  }),

  testCreateTestUserResultsArr: () => (dispatch, getState) => {
    const lessonTestData = getState().mainReducer.lesson_test_data;

    let userAnswers = lessonTestData[0].lesson_test.map(item => {
      return {
        question_id: item.question_id,
        user_answer: []
      }
    })
    const testUserResultsArr = [
      ...userAnswers
    ]
      dispatch(mainActions.testSetTestUserResultsArr(testUserResultsArr))
  },

  testGetValueSelectedUser: (value, id) => ({
    type: 'TEST_GET_VALUE_SELECTED_USER',
    payload: {value, id}
  }),

  testUserFinishTest: () => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true));
    const userAnswers = getState().mainReducer.test_user_results_arr;
    const lessonTest = getState().mainReducer.lesson_test_data[0].lesson_test;
    let userTestRating = 0;

    for (let t of lessonTest) {
      for (let u of userAnswers) {
        if (t.question_id === u.question_id) {
          let testRightAnswer = t.question_answers.length;
          let userRightAnswerCount = 0;
          for (let ta of t.question_answers) {
            for (let ua of u.user_answer) {
              if (ta === ua) {
                userRightAnswerCount += 1

              }
            }
          }

          let questionRes = userRightAnswerCount * 100 / testRightAnswer;
          let userRating = questionRes * (+t.question_rating) / 100;

          if (userRating !== 0) {
            userRating = +userRating.toFixed(2)
            userTestRating += userRating
          }

        }
      }
    }
    dispatch(mainActions.testSetUserTestRating(userTestRating.toFixed(2)));

    const partId = getState().mainReducer.part._id;
    const lessonNumb = getState().mainReducer.lesson_test_data[0].lesson_number;
    const userName = getState().mainReducer.user_logined_data[0].user_name;
    partsApi.checkUserTestResult(partId, lessonNumb, userName).then(({data}) => {
      if (data) {
        dispatch(mainActions.testSetUserFinishTestModalIsOpen(false));
        dispatch(mainActions.setUserStartedTest(false));
        dispatch(mainActions.testSetUserTestResultModalIsOpen(false));
        dispatch(mainActions.setButtonDisabledBool(false));
        dispatch(mainActions.clearApp());
      } else {
        partsApi.postUserTestResult(partId,lessonNumb, {user_name: userName, user_result: userTestRating.toFixed(2)}).then(() => {
          dispatch(mainActions.testSetUserFinishTestModalIsOpen(false));
          dispatch(mainActions.setUserStartedTest(false));
          dispatch(mainActions.testSetUserTestResultModalIsOpen(true));
          dispatch(mainActions.setButtonDisabledBool(false));
        })
      }
    })
  },

  testOnCloseUserTestResultModal: (history) => (dispatch) => {
    history.push('/user/');
    dispatch(mainActions.testClearAppThenUserFinishTest())
  },

  testClearAppThenUserFinishTest: () => ({
    type: 'TEST_CLEAR_APP_THEN_USER_FINISH_TEST'
  }),

  testSetUserTestRating: (value) => ({
    type: 'TEST_SET_USER_TEST_RATING',
    payload: value
  }),

  testSetUserFinishTestModalIsOpen: (value) => ({
    type: 'TEST_SET_USER_FINISH_TEST_MODAL_ISOPEN',
    payload: value
  }),

  testSetUserTestResultModalIsOpen: (value) => ({
    type: 'TEST_SET_USER_TEST_RESULT_MODAL_ISOPEN',
    payload: value
  }),



  //add test

  addTestClearQuestionContentValues: () => ({
    type: 'ADD_TEST_CLEAR_QUESTION_CONTENT_VALUES'
  }),

  addTestSetPartInputValue: (partValue, partId, lessonCount) => ({
    type: 'ADD_TEST_SET_PART_INPUT_VALUE',
    payload: {partValue, partId, lessonCount}
  }),

  addTestGetPartInputValue: (partValue, partId, lessonCount) => dispatch => {
    if (lessonCount === 0) {
      dispatch(mainActions.addTestClearQuestionContentValues())
    }
      dispatch(mainActions.addTestSetPartInputValue(partValue, partId, lessonCount))
      dispatch(mainActions.addTestSetQuestionsArr([]))
      dispatch(mainActions.addTestGetLessonInputValue('', 0))
      dispatch(mainActions.addTestClearQuestionFormThenQuestionAdded());

  },

  addTestGetLessonInputValue: (lessonValue, lessonNumber) => ({
    type: 'ADD_TEST_GET_LESSON_INPUT_VALUE',
    payload: {lessonValue, lessonNumber}
  }),

  addTestSetLessonInputValue: (lessonValue, lessonNumber) => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true));
    dispatch(mainActions.addTestGetLessonInputValue(lessonValue, lessonNumber));
    const partId = getState().mainReducer.add_test_part_id;
    partsApi.getLessonTestDraft(partId, lessonNumber).then(({ data }) => {
            dispatch(mainActions.addTestSetQuestionsArr(data))
            dispatch(mainActions.setButtonDisabledBool(false));
          })
  },

  addTestGetQuestionInputValue: (value) => ({
    type: 'ADD_TEST_GET_QUESTION_INPUT_VALUE',
    payload: value
  }),

  addTestGetOptionsCountInputValue: (value) => ({
    type: 'ADD_TEST_GET_OPTIONS_COUNT_INPUT_VALUE',
    payload: value
  }),

  oNAddTestGetOptionsCountInputValue: value => dispatch => {
    if (value === 1) {
      dispatch(mainActions.addTestGetOptionInputValue2(''));
      dispatch(mainActions.addTestGetOptionInputValue3(''));
      dispatch(mainActions.addTestGetOptionInputValue4(''));
      dispatch(mainActions.addTestGetOptionInputValue5(''));
      dispatch(mainActions.addTestGetOptionInputValue6(''));
      dispatch(mainActions.addTestSetOptionCorrect2(false));
      dispatch(mainActions.addTestSetOptionCorrect3(false));
      dispatch(mainActions.addTestSetOptionCorrect4(false));
      dispatch(mainActions.addTestSetOptionCorrect5(false));
      dispatch(mainActions.addTestSetOptionCorrect6(false));
    }
    if (value === 2) {
      dispatch(mainActions.addTestGetOptionInputValue3(''));
      dispatch(mainActions.addTestGetOptionInputValue4(''));
      dispatch(mainActions.addTestGetOptionInputValue5(''));
      dispatch(mainActions.addTestGetOptionInputValue6(''));
      dispatch(mainActions.addTestSetOptionCorrect3(false));
      dispatch(mainActions.addTestSetOptionCorrect4(false));
      dispatch(mainActions.addTestSetOptionCorrect5(false));
      dispatch(mainActions.addTestSetOptionCorrect6(false));
    }
    if (value === 3) {
      dispatch(mainActions.addTestGetOptionInputValue4(''));
      dispatch(mainActions.addTestGetOptionInputValue5(''));
      dispatch(mainActions.addTestGetOptionInputValue6(''));
      dispatch(mainActions.addTestSetOptionCorrect4(false));
      dispatch(mainActions.addTestSetOptionCorrect5(false));
      dispatch(mainActions.addTestSetOptionCorrect6(false));
    }
    if (value === 4) {
      dispatch(mainActions.addTestGetOptionInputValue5(''));
      dispatch(mainActions.addTestGetOptionInputValue6(''));
      dispatch(mainActions.addTestSetOptionCorrect5(false));
      dispatch(mainActions.addTestSetOptionCorrect6(false));
    }
    if (value === 5) {
      dispatch(mainActions.addTestGetOptionInputValue6(''));
      dispatch(mainActions.addTestSetOptionCorrect6(false));
    }
    dispatch(mainActions.addTestGetOptionsCountInputValue(value));
  },

  addTestGetOptionInputValue1: (value) => ({
    type: 'ADD_TEST_GET_OPTIONS_INPUT_VALUE_1',
    payload: value
  }),

  addTestGetOptionInputValue2: (value) => ({
    type: 'ADD_TEST_GET_OPTIONS_INPUT_VALUE_2',
    payload: value
  }),

  addTestGetOptionInputValue3: (value) => ({
    type: 'ADD_TEST_GET_OPTIONS_INPUT_VALUE_3',
    payload: value
  }),

  addTestGetOptionInputValue4: (value) => ({
    type: 'ADD_TEST_GET_OPTIONS_INPUT_VALUE_4',
    payload: value
  }),

  addTestGetOptionInputValue5: (value) => ({
    type: 'ADD_TEST_GET_OPTIONS_INPUT_VALUE_5',
    payload: value
  }),

  addTestGetOptionInputValue6: (value) => ({
    type: 'ADD_TEST_GET_OPTIONS_INPUT_VALUE_6',
    payload: value
  }),

  addTestSetOptionCorrect1: (value) => ({
    type: 'ADD_TEST_SET_OPTION_CORRECT_1',
    payload: value
  }),

  addTestSetOptionCorrect2: (value) => ({
    type: 'ADD_TEST_SET_OPTION_CORRECT_2',
    payload: value
  }),

  addTestSetOptionCorrect3: (value) => ({
    type: 'ADD_TEST_SET_OPTION_CORRECT_3',
    payload: value
  }),

  addTestSetOptionCorrect4: (value) => ({
    type: 'ADD_TEST_SET_OPTION_CORRECT_4',
    payload: value
  }),

  addTestSetOptionCorrect5: (value) => ({
    type: 'ADD_TEST_SET_OPTION_CORRECT_5',
    payload: value
  }),

  addTestSetOptionCorrect6: (value) => ({
    type: 'ADD_TEST_SET_OPTION_CORRECT_6',
    payload: value
  }),

  addTestSetQuestionRating: (value) => ({
    type: 'ADD_TEST_SET_QUESTION_RATING',
    payload: value
  }),

  addTestGetQuestionRating: value => dispatch =>{
    if (!isNaN(value)) {
      dispatch(mainActions.addTestSetQuestionRating(value))
    }
  },

  addTestGetLessonTestDraft: () => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true));
    const partId = getState().mainReducer.add_test_part_id;
    const lessonNumber = getState().mainReducer.add_test_lesson_number;
    partsApi.getLessonTestDraft(partId, lessonNumber).then(({ data }) => {
            dispatch(mainActions.addTestSetQuestionsArr(data))
            dispatch(mainActions.AddTestSetNewTestModalIsOpen(true))
            dispatch(mainActions.setButtonDisabledBool(false));
          })
  },

  addTestSetQuestionsArr: (arr) => ({
    type: 'ADD_TEST_SET_QUESTIONS_ARR',
    payload: arr
  }),

  addTestAddNewQuestion: () => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true));
    const createId = function () {
      let id = '';
      const str = 'abcdefghik'
      for (let i = 0; i < str.length; i++) {
        id += str[Math.round(Math.random() * 10)] + Math.round(Math.random() * 1000)
      }
      return id
    };

    const questionsArr = getState().mainReducer.add_test_questions_arr;
    const questionText = getState().mainReducer.add_test_question_input_value;
    const questionOptions = [];
    const questionAnswers = [];
    const questionRating = getState().mainReducer.add_test_question_rating;

    if (getState().mainReducer.add_test_options_count === 1) {
      questionOptions.push(getState().mainReducer.add_test_option_input_value_1);
      if (getState().mainReducer.add_test_is_option_1_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_1)
      }
    }

    if (getState().mainReducer.add_test_options_count === 2) {
      questionOptions.push(
        getState().mainReducer.add_test_option_input_value_1,
        getState().mainReducer.add_test_option_input_value_2
      );

      if (getState().mainReducer.add_test_is_option_1_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_1)
      }

      if (getState().mainReducer.add_test_is_option_2_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_2)
      }
    }

    if (getState().mainReducer.add_test_options_count === 3) {
      questionOptions.push(
        getState().mainReducer.add_test_option_input_value_1,
        getState().mainReducer.add_test_option_input_value_2,
        getState().mainReducer.add_test_option_input_value_3
      );

      if (getState().mainReducer.add_test_is_option_1_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_1)
      }

      if (getState().mainReducer.add_test_is_option_2_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_2)
      }

      if (getState().mainReducer.add_test_is_option_3_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_3)
      }

    }

    if (getState().mainReducer.add_test_options_count === 4) {
      questionOptions.push(
        getState().mainReducer.add_test_option_input_value_1,
        getState().mainReducer.add_test_option_input_value_2,
        getState().mainReducer.add_test_option_input_value_3,
        getState().mainReducer.add_test_option_input_value_4
      );

      if (getState().mainReducer.add_test_is_option_1_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_1)
      }

      if (getState().mainReducer.add_test_is_option_2_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_2)
      }

      if (getState().mainReducer.add_test_is_option_3_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_3)
      }

      if (getState().mainReducer.add_test_is_option_4_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_4)
      }
    }

    if (getState().mainReducer.add_test_options_count === 5) {
      questionOptions.push(
        getState().mainReducer.add_test_option_input_value_1,
        getState().mainReducer.add_test_option_input_value_2,
        getState().mainReducer.add_test_option_input_value_3,
        getState().mainReducer.add_test_option_input_value_4,
        getState().mainReducer.add_test_option_input_value_5
      );

      if (getState().mainReducer.add_test_is_option_1_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_1)
      }

      if (getState().mainReducer.add_test_is_option_2_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_2)
      }

      if (getState().mainReducer.add_test_is_option_3_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_3)
      }

      if (getState().mainReducer.add_test_is_option_4_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_4)
      }

      if (getState().mainReducer.add_test_is_option_5_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_5)
      }
    }

    if (getState().mainReducer.add_test_options_count === 6) {
      questionOptions.push(
        getState().mainReducer.add_test_option_input_value_1,
        getState().mainReducer.add_test_option_input_value_2,
        getState().mainReducer.add_test_option_input_value_3,
        getState().mainReducer.add_test_option_input_value_4,
        getState().mainReducer.add_test_option_input_value_5,
        getState().mainReducer.add_test_option_input_value_6,
      );

      if (getState().mainReducer.add_test_is_option_1_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_1)
      }

      if (getState().mainReducer.add_test_is_option_2_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_2)
      }

      if (getState().mainReducer.add_test_is_option_3_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_3)
      }

      if (getState().mainReducer.add_test_is_option_4_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_4)
      }

      if (getState().mainReducer.add_test_is_option_5_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_5)
      }

      if (getState().mainReducer.add_test_is_option_6_correct) {
        questionAnswers.push(getState().mainReducer.add_test_option_input_value_6)
      }
    }

    questionsArr.push(
      {
        question_id: createId(),
        question_text: questionText,
        question_options: questionOptions,
        question_answers: questionAnswers,
        question_rating: questionRating
      }
    )

    const partId = getState().mainReducer.add_test_part_id;
    const lessonNumber = getState().mainReducer.add_test_lesson_number;

    partsApi.addQuestionToLessonTestDraft(partId, lessonNumber,
      {
        question_id: createId(),
        question_text: questionText,
        question_options: questionOptions,
        question_answers: questionAnswers,
        question_rating: questionRating
      }
    ).then(() => {
      dispatch(mainActions.addTestSetQuestionsArr(questionsArr));
      dispatch(mainActions.addTestClearQuestionFormThenQuestionAdded());
      dispatch(mainActions.setButtonDisabledBool(false));
    })
  },

  addTestClearQuestionFormThenQuestionAdded: () => ({
    type: 'ADD_TEST_CLEAR_QUESTION_FORM_THEN_QUESTION_ADDED'
  }),

  AddTestSetNewTestModalIsOpen: (value) => ({
    type: 'ADD_TEST_SET_NEW_TEST_MODAL_ISOPEN',
    payload: value
  }),

  AddTestSetConfirmSentTestModalIsOpen: (value) => ({
    type: 'ADD_TEST_SET_CONFIRM_SENT_TEST_MODAL_ISOPEN',
    payload: value
  }),

  addTestPostNewTest: (histopy) => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true));
    const partId = getState().mainReducer.add_test_part_id;
    const lessonNumber = getState().mainReducer.add_test_lesson_number;
    const test = getState().mainReducer.add_test_questions_arr;
    partsApi.postNewTest(partId, lessonNumber, test).then(() => {
      dispatch(mainActions.AddTestSetConfirmSentTestModalIsOpen(false));
      dispatch(mainActions.fetchParts());
      histopy.push('/parts/'+partId);
      dispatch(mainActions.addTestClearFormAfterTestPost());
      dispatch(mainActions.setButtonDisabledBool(false));
      dispatch(mainActions.setHelpModalInformation([{
        title: "Тест відправленно"
      }]));
      dispatch(mainActions.startHelpModalTimer(3));
    })
  },

  addTestClearFormAfterTestPost: () => ({
    type: 'ADD_TEST_CLEAR_FORM_AFTER_TEST_POST'
  }),

  // new test Modal

  newTestModalDeleteQuestion: (quest_index) => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true));
    const partId = getState().mainReducer.add_test_part_id;
    const lessonNumber = getState().mainReducer.add_test_lesson_number;
    const questionsArr = getState().mainReducer.add_test_questions_arr;
    const newQuestionsArr = questionsArr.filter((item, index) => index !== quest_index);

    partsApi.addLessonTestDraft(partId, lessonNumber, newQuestionsArr).then(() => {
      partsApi.getLessonTestDraft(partId, lessonNumber).then(({ data }) => {
              dispatch(mainActions.addTestSetQuestionsArr(data))
              dispatch(mainActions.setButtonDisabledBool(false));
            })
    })


  },

  // admin edit lesson

  fetchEditLesson: (part, lesson, partId, history) => (dispatch, getState) => {
    const editLessonData = getState().mainReducer.parts.filter(item => item.partNumber === part)[0].lessons.filter(item => item.lesson_number === lesson)
    dispatch(mainActions.setEditLessonData(editLessonData, partId, part));
    history.push('/edit-lesson/')
  },

  setEditLessonData: (data, partId, partNum) => ({
    type: 'SET_EDIT_LESSON_DATA',
    payload: {data, partId, partNum}
  }),

  editLessonGetEditModuleValue: (value) => ({
    type: 'EDIT_LESSON_GET_EDIT_MODULE_VALUE',
    payload: value
  }),

  editLessonGetEditModuleData: (value, bool, type, number) => dispatch => {
    window.scrollTo(0, 0);
    dispatch(mainActions.editLessonSetEditModuleData(value, bool, type, number))
  },

  editLessonSetEditModuleData: (value, bool, type, number) => ({
    type: 'EDIT_LESSON_SET_EDIT_MODULE_DATA',
    payload: {value, bool, type, number}
  }),

  editLessonClearEditBlock: () => ({
    type: 'EDIT_LESSON_CLEAR_EDIT_BLOCK'
  }),

  editLessonAddChangesToData: (history) => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true))
    const id = getState().mainReducer.edit_lesson_part_id;
    const partNumber = getState().mainReducer.edit_lesson_part_number;
    const lessonNumb = getState().mainReducer.edit_lesson_data[0].lesson_number;
    const modNum = getState().mainReducer.edit_lesson_edit_module_number;
    const modVal = {
      module_value: getState().mainReducer.edit_lesson_edit_module_input_value
    };

    const newEditLessonData = getState().mainReducer.edit_lesson_data.map(item => {
      item.lesson_text.map(lm => {
        if (lm.module_number === modNum) {
          lm.module_value = modVal.module_value
        }
        return lm
      })
      return item;
    })

    dispatch(mainActions.setEditLessonData(newEditLessonData, id, partNumber));

    partsApi.postEditedModule(id,lessonNumb, modNum, modVal)
      .then(() => {
        dispatch(mainActions.setButtonDisabledBool(false))
        dispatch(mainActions.editLessonClearEditBlock())
        dispatch(mainActions.fetchEditLesson(partNumber, lessonNumb, id, history))
      })
  },

  editLessonDeleteModule: (mNum, history) => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true))
    const id = getState().mainReducer.edit_lesson_part_id;
    const lessonNumb = getState().mainReducer.edit_lesson_data[0].lesson_number;
    const partNumber = getState().mainReducer.edit_lesson_part_number;
    const newEditLessonData = getState().mainReducer.edit_lesson_data.map(item => {
      item.lesson_text = item.lesson_text.map(lm => {
        if (lm.module_number === mNum) {
          return undefined
        } else {
          return lm
        }
      }).filter(item => item !== undefined)
      return item
    }).map(item => {
      item.lesson_text = item.lesson_text.map((lm, index) => {
        lm.module_number = index + 1;
        return lm
      })
      return item
    })
    dispatch(mainActions.setEditLessonData(newEditLessonData, id, partNumber));

    partsApi.deleteModule(id, lessonNumb, mNum).then(() => {
      dispatch(mainActions.setButtonDisabledBool(false))
      dispatch(mainActions.fetchEditLesson(partNumber, lessonNumb, id, history))
    })
  },

  editLessonMoveModule: (modNum, modInd, direction, history) => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true))
    const id = getState().mainReducer.edit_lesson_part_id;
    const lessonNumb = getState().mainReducer.edit_lesson_data[0].lesson_number;
    const partNumber = getState().mainReducer.edit_lesson_part_number;
    const lessonData = getState().mainReducer.edit_lesson_data;

    const removedItem = lessonData[0].lesson_text.filter(item => item.module_number === modNum);

    const newIndex =
      direction === 'up' ?
        modInd - 1 :
        direction === 'down' ?
          modInd + 1 :
          ''

    const newLessonData = getState().mainReducer.edit_lesson_data.map(item => {
      item.lesson_text = item.lesson_text.filter(item => item !== removedItem[0])
      return item
    })

    newLessonData[0].lesson_text.splice(newIndex, 0, removedItem[0]);

    newLessonData.map(item => {
      item.lesson_text = item.lesson_text.map((lm, index) => {
        lm.module_number = index + 1
        return lm
      })
      return item
    })

    dispatch(mainActions.setEditLessonData(newLessonData, id, partNumber));

    partsApi.moveModule(id, lessonNumb, modNum, modInd, direction).then(() => {
      dispatch(mainActions.setButtonDisabledBool(false))
      dispatch(mainActions.fetchEditLesson(partNumber, lessonNumb, id, history))
    })
  },

  editLessonSetAddModuleType: (value) => ({
    type: 'EDIT_LESSON_SET_ADD_MODULE_TYPE',
    payload: value
  }),

  editLessonGetAddModuleType: (value) => (dispatch) => {
    if (value === 'title_big') {
      dispatch(mainActions.editLessonGetAddModuleSmollTitle(''));
      dispatch(mainActions.editLessonGetAddModuleText(''));
      dispatch(mainActions.editLessonGetAddModuleImg(''));
      dispatch(mainActions.editLessonGetAddModuleVideo(''));
    }
    if (value === 'title_smoll') {
      dispatch(mainActions.editLessonGetAddModuleBigTitle(''));
      dispatch(mainActions.editLessonGetAddModuleText(''));
      dispatch(mainActions.editLessonGetAddModuleImg(''));
      dispatch(mainActions.editLessonGetAddModuleVideo(''));
    }
    if (value === 'text') {
      dispatch(mainActions.editLessonGetAddModuleBigTitle(''));
      dispatch(mainActions.editLessonGetAddModuleSmollTitle(''));
      dispatch(mainActions.editLessonGetAddModuleImg(''));
      dispatch(mainActions.editLessonGetAddModuleVideo(''));
    }
    if (value === 'img') {
      dispatch(mainActions.editLessonGetAddModuleBigTitle(''));
      dispatch(mainActions.editLessonGetAddModuleSmollTitle(''));
      dispatch(mainActions.editLessonGetAddModuleText(''));
      dispatch(mainActions.editLessonGetAddModuleVideo(''));
    }
    if (value === 'video') {
      dispatch(mainActions.editLessonGetAddModuleBigTitle(''));
      dispatch(mainActions.editLessonGetAddModuleSmollTitle(''));
      dispatch(mainActions.editLessonGetAddModuleText(''));
      dispatch(mainActions.editLessonGetAddModuleImg(''));
    }
    dispatch(mainActions.editLessonSetAddModuleType(value))
  },

  editLessonGetAddModuleBigTitle: (value) => ({
    type: 'EDIT_LESSON_GET_ADD_MODULE_BIG_TITLE',
    payload: value
  }),

  editLessonGetAddModuleSmollTitle: (value) => ({
    type: 'EDIT_LESSON_GET_ADD_MODULE_SMOLL_TITLE',
    payload: value
  }),

  editLessonGetAddModuleText: (value) => ({
    type: 'EDIT_LESSON_GET_ADD_MODULE_TEXT',
    payload: value
  }),

  editLessonGetAddModuleImg: (value) => ({
    type: 'EDIT_LESSON_GET_ADD_MODULE_IMG',
    payload: value
  }),

  editLessonGetAddModuleVideo: (value) => ({
    type: 'EDIT_LESSON_GET_ADD_MODULE_VIDEO',
    payload: value
  }),

  editLessonPostNewModule: (history) => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true))
    const id = getState().mainReducer.edit_lesson_part_id;
    const partNumber = getState().mainReducer.edit_lesson_part_number;
    const lessonNumb = getState().mainReducer.edit_lesson_data[0].lesson_number;
    const newModuleNumber = getState().mainReducer.edit_lesson_data[0].lesson_text.length + 1;
    const newModuleType = getState().mainReducer.edit_lesson_add_module_type;
    const newModuleValue =
      newModuleType === 'title_big' ?
      getState().mainReducer.edit_lesson_add_module_big_title
      :
      newModuleType === 'title_smoll' ?
      getState().mainReducer.edit_lesson_add_module_smoll_title
      :
      newModuleType === 'text' ?
      getState().mainReducer.edit_lesson_add_module_text
      :
      newModuleType === 'img' ?
      getState().mainReducer.edit_lesson_add_module_img
      :
      newModuleType === 'video' ?
      getState().mainReducer.edit_lesson_add_module_video
      :
      ''


    const newModule = {
      module_number: newModuleNumber,
      module_type: newModuleType,
      module_value: newModuleValue
    }

    const newLessonData = getState().mainReducer.edit_lesson_data.map(item => {
      item.lesson_text.push(newModule)
      return item
    })

    dispatch(mainActions.setEditLessonData(newLessonData, id, partNumber));

    partsApi.postNewModule(id, lessonNumb, newModule).then(() => {
      dispatch(mainActions.setButtonDisabledBool(false));
      dispatch(mainActions.editLessonClearAddModuleBlock());
      dispatch(mainActions.fetchEditLesson(partNumber, lessonNumb, id, history))
      window.scrollTo(0, document.body.scrollHeight);
    })
  },

  editLessonClearAddModuleBlock: () => ({
    type: 'EDIT_LESSON_CREAR_ADD_MODULE_BLOCK'
  }),

  editLessonSetEditTitleData: (title) => (dispatch) => {
    window.scrollTo(0, 0);
    dispatch(mainActions.editLessonSetLessonTitleValue(title))
    dispatch(mainActions.editLessonSetLessonTitleEditBool(true))
  },

  editLessonOnCancelEditLessonTitle: () => (dispatch) => {
    dispatch(mainActions.editLessonSetLessonTitleValue(''))
    dispatch(mainActions.editLessonSetLessonTitleEditBool(false))
  },

  editLessonSetLessonTitleEditBool: (value) => ({
    type: 'EDIT_LESSON_SET_LESSON_TITLE_EDIT_BOOL',
    payload: value
  }),

  editLessonSetLessonTitleValue: (value) => ({
    type: 'EDIT_LESSON_SET_LESSON_TITLE_VALUE',
    payload: value
  }),

  editLessonPostNewLessonTitle: (history) => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true))
    const id = getState().mainReducer.edit_lesson_part_id;
    const partNumber = getState().mainReducer.edit_lesson_part_number;
    const lessonNumb = getState().mainReducer.edit_lesson_data[0].lesson_number;
    const newTitle = getState().mainReducer.edit_lesson_lesson_title_value;

    const newLessonData = getState().mainReducer.edit_lesson_data.map(item => {
      item.lesson_title = newTitle
      return item
    });

    dispatch(mainActions.setEditLessonData(newLessonData, id, partNumber));

    partsApi.postNewLessonTitle(id, lessonNumb, {title: newTitle}).then(() => {
      dispatch(mainActions.setButtonDisabledBool(false));
      dispatch(mainActions.editLessonClearEditTitleData());
      dispatch(mainActions.fetchEditLesson(partNumber, lessonNumb, id, history))
    })
  },

  editLessonClearEditTitleData: () => (dispatch) => {
    dispatch(mainActions.editLessonSetLessonTitleEditBool(false));
    dispatch(mainActions.editLessonSetLessonTitleValue(''));
  },

  editLessonClearPage: () => ({
    type: 'EDIT_LESSON_CLEAR_PAGE'
  }),

  //admin AdminGroupLog

  aGroupLogSetRetakingMode: () => ({
    type: 'A_GROUP_LOG_SET_RETAKING_MODE'
  }),

  aGroupLogOnClickRetakingUser: (id, lesNumb, userName) => (dispatch) => {
    dispatch(mainActions.aGroupLogSetRetakingModalIsOpen(true))
    dispatch(mainActions.aGroupLogSetRetakingUserData({
      id,
      lesNumb,
      userName
    }))
  },

  aGroupLogSetRetakingUserData: (data) => ({
    type: 'A_GROUP_LOG_SET_RETAKING_USER_DATA',
    payload: data
  }),

  aGroupLogSetRetakingModalIsOpen: (value) => ({
    type: 'A_GROUP_LOG_SET_RETAKING_MODAL_IS_OPEN',
    payload: value
  }),

  aGroupLogRetakingModalClosed: () => (dispatch) => {
    dispatch(mainActions.aGroupLogSetRetakingUserData(null))
    dispatch(mainActions.aGroupLogSetRetakingModalIsOpen(false))
  },

  aGroupLogClearUserResult: () => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true));
    const retakingUserData = getState().mainReducer.a_group_log_retaking_user_data;

    partsApi.retakingClearUserResult(retakingUserData.id, retakingUserData.lesNumb, retakingUserData.userName).then(() => {
      dispatch(mainActions.fetchParts());
      dispatch(mainActions.fetchUsers());
      dispatch(mainActions.aGroupLogRetakingModalClosed());
      dispatch(mainActions.setButtonDisabledBool(false));
    })
  },

  aGroupLogClearPage: () => ({
    type: 'A_GROUP_LOG_CLEAR_PAGE'
  }),


  //admin AdminGroupLogManagement

  aGroupLogMNGSetEditModeIsOn: (value) => ({
    type: 'A_GROUP_LOG_MNG_SET_EDIT_MODE_IS_ON',
    payload: value
  }),

  aGroupLogMNGSetAddModeIsOn: (value) => ({
    type: 'A_GROUP_LOG_MNG_SET_ADD_MODE_IS_ON',
    payload: value
  }),

  GroupLogMNGSetUserFullName: (value) => ({
    type: 'A_GROUP_LOG_MNG_SET_USER_FULL_NAME',
    payload: value
  }),

  GroupLogMNGSetUserLogin: (value) => ({
    type: 'A_GROUP_LOG_MNG_SET_USER_LOGIN',
    payload: value
  }),

  GroupLogMNGSetUserPassword: (value) => ({
    type: 'A_GROUP_LOG_MNG_SET_USER_PASSWORD',
    payload: value
  }),


  GroupLogMNGSetEditedUserInformation: (value) => ({
    type: 'A_GROUP_LOG_MNG_SET_EDITED_USER_INFORMATION',
    payload: value
  }),

  aGroupLogMNGSetEditUserInformation: (fullname, login, password) => (dispatch) => {
    window.scrollTo(0, 0);
    dispatch(mainActions.GroupLogMNGSetUserFullName(fullname));
    dispatch(mainActions.GroupLogMNGSetUserLogin(login));
    dispatch(mainActions.GroupLogMNGSetUserPassword(password));
    dispatch(mainActions.GroupLogMNGSetEditedUserInformation({
      user_name: login,
      user_password: password,
      user_fullname: fullname
    }));
    dispatch(mainActions.aGroupLogMNGSetAddModeIsOn(false));
    dispatch(mainActions.aGroupLogMNGSetEditModeIsOn(true));
  },

  aGroupLogMNGClearUserEditForm: () => (dispatch) => {
    dispatch(mainActions.GroupLogMNGSetUserFullName(''));
    dispatch(mainActions.GroupLogMNGSetUserLogin(''));
    dispatch(mainActions.GroupLogMNGSetUserPassword(''));
    dispatch(mainActions.GroupLogMNGSetEditedUserInformation(null));
    dispatch(mainActions.aGroupLogMNGSetEditModeIsOn(false));
    dispatch(mainActions.aGroupLogMNGSetConfirmPostEditedUserModalIsOpen(false));
  },

  aGroupLogMNGSetConfirmPostEditedUserModalIsOpen: (value) => ({
    type: 'A_GROUP_LOG_MNG_SET_CONFIRM_POST_EDITED_USER_MODAL_IS_OPEN',
    payload: value
  }),

  aGroupLogMNGClearUserAddForm: () => (dispatch) => {
    dispatch(mainActions.GroupLogMNGSetUserFullName(''));
    dispatch(mainActions.GroupLogMNGSetUserLogin(''));
    dispatch(mainActions.GroupLogMNGSetUserPassword(''));
    dispatch(mainActions.aGroupLogMNGSetAddModeIsOn(false));
  },

  aGroupLogMNGSetConfirmAddUserModalIsOpen: (value) => ({
    type: 'A_GROUP_LOG_MNG_SET_CONFIRM_ADD_USER_MODAL_IS_OPEN',
    payload: value
  }),

  aGroupLogMNGSetConfirmDeleteUserModalIsOpen: (value) => ({
    type: 'A_GROUP_LOG_MNG_SET_CONFIRM_DELETE_USER_MODAL_IS_OPEN',
    payload: value
  }),

  aGroupLogMNGSetDeleteUserInformation: (fullname, login, password) => (dispatch) => {
    dispatch(mainActions.GroupLogMNGSetUserFullName(fullname));
    dispatch(mainActions.GroupLogMNGSetUserLogin(login));
    dispatch(mainActions.GroupLogMNGSetUserPassword(password));
    dispatch(mainActions.aGroupLogMNGSetAddModeIsOn(false));
    dispatch(mainActions.aGroupLogMNGSetEditModeIsOn(false));
    dispatch(mainActions.aGroupLogMNGSetConfirmDeleteUserModalIsOpen(true));

  },

  aGroupLogMNGClearUserDeleteInformation: () => (dispatch) => {
    dispatch(mainActions.GroupLogMNGSetUserFullName(''));
    dispatch(mainActions.GroupLogMNGSetUserLogin(''));
    dispatch(mainActions.GroupLogMNGSetUserPassword(''));
    dispatch(mainActions.aGroupLogMNGSetConfirmDeleteUserModalIsOpen(false));
  },

  aGroupLogMNGDeleteUser: () => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true));
    const userInfo = {
      user_name: getState().mainReducer.a_group_log_mng_user_login,
      user_password: getState().mainReducer.a_group_log_mng_user_password,
      user_fullname: getState().mainReducer.a_group_log_mng_user_fullname
    };

    partsApi.deleteUser(userInfo).then(() => {
      dispatch(mainActions.fetchUsers());
      dispatch(mainActions.aGroupLogMNGClearUserDeleteInformation(''));
      dispatch(mainActions.setButtonDisabledBool(false));
      dispatch(mainActions.setHelpModalInformation([{
        title: "Учня видаленно"
      }]));
      dispatch(mainActions.startHelpModalTimer(3));
    })
  },

  aGroupLogMNGAddNewUser: () => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true));
    const newUser = {
      user_name: getState().mainReducer.a_group_log_mng_user_login,
      user_password: getState().mainReducer.a_group_log_mng_user_password,
      user_fullname: getState().mainReducer.a_group_log_mng_user_fullname
    };

    partsApi.addNewUser(newUser).then(() => {
      dispatch(mainActions.aGroupLogMNGClearUserAddForm());
      dispatch(mainActions.aGroupLogMNGSetConfirmAddUserModalIsOpen(false));
      dispatch(mainActions.fetchUsers());
      dispatch(mainActions.setButtonDisabledBool(false));
      dispatch(mainActions.setHelpModalInformation([{
        title: "Учня додано"
      }]));
      dispatch(mainActions.startHelpModalTimer(3));
    })
  },

  aGroupLogMNGPostEditedUser: () => (dispatch, getState) => {
    dispatch(mainActions.setButtonDisabledBool(true));
    const prevUserInfo = getState().mainReducer.a_group_log_mng_edited_user_information;
    const newUserInfo = {
      user_name: getState().mainReducer.a_group_log_mng_user_login,
      user_password: getState().mainReducer.a_group_log_mng_user_password,
      user_fullname: getState().mainReducer.a_group_log_mng_user_fullname
    }
    partsApi.postEditedUser(prevUserInfo, newUserInfo).then(({data}) => {
      dispatch(mainActions.fetchUsers());
      dispatch(mainActions.aGroupLogMNGClearUserEditForm());
      dispatch(mainActions.setButtonDisabledBool(false));
      dispatch(mainActions.setHelpModalInformation([{
        title: "Дані збережено"
      }]));
      dispatch(mainActions.startHelpModalTimer(3));
    })
  },

  aGroupLogMNGClearPage: () => ({
    type: 'A_GROUP_LOG_MNG_CLEAR_PAGE'
  })

}

export default mainActions;
