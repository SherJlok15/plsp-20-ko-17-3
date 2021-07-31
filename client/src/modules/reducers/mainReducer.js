const initialState = {
  parts: null,
  part: null,
  users: null,
  user_logined: false,
  user_logined_data: null,
  lesson_data: null,
  lesson_test_data: null,
  user_started_test: false,
  button_disabled_bool: false,
  help_modal_is_open: false,
  help_modal_timer: 1,
  help_modal_information: [],
  //News
  news: null,
  add_news_text: '',
  //loginform user name
  form_user_name: '',
  form_user_name_valid: false,
  form_user_name_errors: '',
  //loginform user password
  form_user_password: '',
  form_user_password_valid: false,
  form_user_password_errors: '',
  //admin
  admin_logined: false,
  //> add lesson
  add_lesson_count_lessons_in_part: 0,
  add_lesson_lesson_title: '',
  add_lesson_part_input_value: '',
  add_lesson_part_id: null,
  add_lesson_new_part_title: '',
  add_lesson_lesson_modules: [],
  add_lesson_lesson_module_type_arr: ['title_big','title_smoll','text', 'img', 'video'],
  add_lesson_lesson_module_type: '',
  add_lesson_module_text_input_value:  '',
  add_lesson_module_img_input_value:  '',
  add_lesson_module_title_big_input_value: '',
  add_lesson_module_title_smoll_input_value: '',
  add_lesson_module_video_input_value: '',
  add_lesson_module_counter: 0,
  //>modal
  add_lesson_new_lesson_modal_isopen: false,
  add_lesson_confirm_modal: false,
  //delete panel
  delete_panel_delete_part_modal_isopen: false,
  delete_panel_delete_lesson_modal_isopen: false,
  delete_panel_delete_test_modal_isopen: false,
  delete_panel_delete_part_id: null,
  delete_panel_delete_lesson_index: null,
  //add test
  add_test_part_input_value: '',
  add_test_part_id: null,
  add_test_lessons_in_part: 0,
  add_test_lesson_input_value: '',
  add_test_lesson_number: 0,

  add_test_questions_arr: [],

  add_test_question_input_value: '',
  add_test_options_count: 0,
  add_test_option_input_value_1: '',
  add_test_option_input_value_2: '',
  add_test_option_input_value_3: '',
  add_test_option_input_value_4: '',
  add_test_option_input_value_5: '',
  add_test_option_input_value_6: '',
  add_test_question_answers: [],
  add_test_is_option_1_correct: false,
  add_test_is_option_2_correct: false,
  add_test_is_option_3_correct: false,
  add_test_is_option_4_correct: false,
  add_test_is_option_5_correct: false,
  add_test_is_option_6_correct: false,
  add_test_question_rating: 1,

  add_test_new_test_modal_isopen: false,
  add_test_confirm_sent_test_modal_isopen: false,

  // test page

  test_user_results_arr: [],
  test_user_test_rating: null,
  test_user_finish_test_modal_isopen: false,
  test_user_test_result_modal_isopen: false,

  //admin edit lesson

  edit_lesson_data: null,
  edit_lesson_part_id: null,
  edit_lesson_part_number: '',
  edit_lesson_edit_module_input_value: '',
  edit_lesson_module_edit_bool: false,
  edit_lesson_edit_module_type: null,
  edit_lesson_edit_module_number: '',
  edit_lesson_lesson_title_edit_bool: false,
  edit_lesson_lesson_title_value: '',

  edit_lesson_add_module_type: '',
  edit_lesson_add_module_big_title: '',
  edit_lesson_add_module_smoll_title: '',
  edit_lesson_add_module_text: '',
  edit_lesson_add_module_img: '',
  edit_lesson_add_module_video: '',

  //Admin Group Log

  a_group_log_retaking_mode_is_on: false,
  a_group_log_retaking_modal_is_open: false,
  a_group_log_retaking_user_data: null,

  //Admin Group Log Management
  a_group_log_mng_edit_mode_is_on: false,
  a_group_log_mng_add_mode_is_on: false,
  a_group_log_mng_user_fullname: '',
  a_group_log_mng_user_login: '',
  a_group_log_mng_user_password: '',
  a_group_log_mng_edited_user_information: null,
  a_group_log_mng_confirm_add_user_modal_is_open: false,
  a_group_log_mng_confirm_delete_user_modal_is_open: false,
  a_group_log_mng_confirm_post_edited_user_modal_is_open: false,
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case 'CLEAR_APP':
      return {
        ...state,
        help_modal_is_open: false,
        help_modal_timer: 1,
        help_modal_information: [],
        part: null,
        user_logined: false,
        user_logined_data: null,
        lesson_data: null,
        lesson_test_data: null,
        user_started_test: false,
        add_news_text: '',
        form_user_name: '',
        form_user_name_valid: false,
        form_user_name_errors: '',
        form_user_password: '',
        form_user_password_valid: false,
        form_user_password_errors: '',
        admin_logined: false,
        add_lesson_count_lessons_in_part: 0,
        add_lesson_lesson_title: '',
        add_lesson_part_input_value: '',
        add_lesson_part_id: null,
        add_lesson_new_part_title: '',
        add_lesson_lesson_modules: [],
        add_lesson_lesson_module_type_arr: ['title_big','title_smoll','text', 'img'],
        add_lesson_lesson_module_type: '',
        add_lesson_module_text_input_value:  '',
        add_lesson_module_img_input_value:  '',
        add_lesson_module_title_big_input_value: '',
        add_lesson_module_title_smoll_input_value: '',
        add_lesson_module_video_input_value: '',
        add_lesson_module_counter: 0,
        add_lesson_new_lesson_modal_isopen: false,
        add_lesson_confirm_modal: false,
        delete_panel_delete_part_modal_isopen: false,
        delete_panel_delete_lesson_modal_isopen: false,
        delete_panel_delete_test_modal_isopen: false,
        delete_panel_delete_part_id: null,
        delete_panel_delete_lesson_index: null,
        add_test_part_input_value: '',
        add_test_part_id: null,
        add_test_lessons_in_part: 0,
        add_test_lesson_input_value: '',
        add_test_lesson_number: 0,
        add_test_questions_arr: [],
        add_test_question_input_value: '',
        add_test_options_count: 0,
        add_test_option_input_value_1: '',
        add_test_option_input_value_2: '',
        add_test_option_input_value_3: '',
        add_test_option_input_value_4: '',
        add_test_option_input_value_5: '',
        add_test_option_input_value_6: '',
        add_test_question_answers: [],
        add_test_is_option_1_correct: false,
        add_test_is_option_2_correct: false,
        add_test_is_option_3_correct: false,
        add_test_is_option_4_correct: false,
        add_test_is_option_5_correct: false,
        add_test_is_option_6_correct: false,
        add_test_question_rating: 1,
        add_test_new_test_modal_isopen: false,
        add_test_confirm_sent_test_modal_isopen: false,
        test_user_results_arr: [],
        test_user_test_rating: null,
        test_user_finish_test_modal_isopen: false,
        test_user_test_result_modal_isopen: false,
      }

    case 'SET_BUTTON_DISABLED_BOOL':
      return {
        ...state,
        button_disabled_bool: payload
      }

    case 'SET_HELP_MODAL_IS_OPEN_BOOL':
      return {
        ...state,
        help_modal_is_open: payload
      }

    case 'SET_HELP_MODAL_INFORMATION':
      return {
        ...state,
        help_modal_information: payload
      }

    case 'SET_HELP_MODAL_TIMER':
      return {
        ...state,
        help_modal_timer: payload
      }



    // news

    case 'SET_NEWS':
      return {
        ...state,
        news: payload
      }

    case 'GET_NEWS_INPUT_VALUE':
      return {
        ...state,
        add_news_text: payload
      }

    case 'CLEAR_ADD_NEWS_FORM':
      return {
        ...state,
        add_news_text: ''
      }

    //Admin
    //>add lesson
    case 'GET_LESSON_TITLE':
      return {
        ...state,
        add_lesson_lesson_title: payload
      }

    case 'GET_PART_INPUT_VALUE':
      return {
        ...state,
        add_lesson_part_input_value: payload.value,
        add_lesson_count_lessons_in_part: payload.lesson_lenght,
        add_lesson_part_id: payload.id,
        add_lesson_new_part_title: payload.id === 0 ? state.add_lesson_new_part_title : '',

      }

    case 'GET_NEW_PART_TITLE_VALUE':
      return {
        ...state,
        add_lesson_new_part_title: payload
      }

    case 'GET_LESSON_MODULE_TYPE':
      return {
        ...state,
        add_lesson_lesson_module_type: payload
      }

    case 'CLEAR_LESSON_MODULE_VALUES':
      return {
        ...state,
        add_lesson_module_text_input_value: '',
        add_lesson_module_img_input_value: '',
        add_lesson_module_title_big_input_value: '',
        add_lesson_module_title_smoll_input_value: '',
        add_lesson_module_video_input_value: ''
      }

    case 'GET_LESSON_MODULE_TEXT_INPUT_VALUE':
      return {
        ...state,
        add_lesson_module_text_input_value: payload
      }

    case 'GET_LESSON_MODULE_IMG_INPUT_VALUE':
      return {
        ...state,
        add_lesson_module_img_input_value: payload
      }

    case 'GET_LESSON_MODULE_TITLEBIG_INPUT_VALUE':
      return {
        ...state,
        add_lesson_module_title_big_input_value: payload
      }

    case 'GET_LESSON_MODULE_TITLESMOLL_INPUT_VALUE':
      return {
        ...state,
        add_lesson_module_title_smoll_input_value: payload
      }

    case 'GET_LESSON_MODULE_VIDEO_INPUT_VALUE':
      return {
        ...state,
        add_lesson_module_video_input_value: payload
      }

    case 'SET_LESSON_MODULE_COUNT':
      return {
        ...state,
        add_lesson_module_counter: payload
      }

    case 'SET_LESSON_MODULES':
      return {
        ...state,
        add_lesson_lesson_modules: payload
      }

    case 'CLEAR_ADD_LESSON_CONTENT':
      return {
        ...state,
        add_lesson_lesson_module_type: '',
        add_lesson_module_text_input_value:  '',
        add_lesson_module_img_input_value:  '',
        add_lesson_module_title_big_input_value: '',
        add_lesson_module_title_smoll_input_value: '',
        add_lesson_module_video_input_value: ''
      }

    case 'CLEAR_ADD_LESSON_FORM':
      return {
        ...state,
        add_lesson_lesson_modules: [],
        parts: null,
        add_lesson_count_lessons_in_part: 0,
        add_lesson_lesson_title: '',
        add_lesson_part_input_value: '',
        add_lesson_part_id: null,
        add_lesson_lesson_module_type: '',
        add_lesson_module_text_input_value:  '',
        add_lesson_module_img_input_value:  '',
        add_lesson_module_title_big_input_value: '',
        add_lesson_module_title_smoll_input_value: '',
        add_lesson_module_video_input_value: '',
        add_lesson_module_counter: 0,
        add_lesson_new_lesson_modal_isopen: false,
        add_lesson_new_part_title: '',
        add_lesson_confirm_modal: false,
      }

      //> new lesson modal window

    case 'SET_NEW_LESSON_MODAL_ISOPEN':
      return {
        ...state,
        add_lesson_new_lesson_modal_isopen: payload
      }

    case 'SET_ADD_LESSON_CONFIRM_MODAL_ISOPEN':
      return {
        ...state,
        add_lesson_confirm_modal: payload
      }

    // Parts

    case 'SET_PARTS':
      return {
        ...state,
        parts: payload
      }

    // Part

    case 'SET_PART':
      return {
        ...state,
        part: payload
      }
    case 'CLEAR_PART':
      return {
        ...state,
        part: null
      }

    // Users

    case 'SET_USERS':
      return {
        ...state,
        users: payload
      }

    // lessons

    case 'SET_LESSON':
      return {
        ...state,
        lesson_data: payload
      }

    //Login form

    case 'CLEAR_FORM_INPUTS':
      return {
        ...state,
        form_user_name: '',
        form_user_name_valid: false,
        form_user_name_errors: '',
        form_user_password: '',
        form_user_password_valid: false,
        form_user_password_errors: '',
      }

    case 'SET_USER_LOGINED':
      return {
        ...state,
        user_logined: payload.value,
        user_logined_data: payload.user
      }
    case 'SET_ADMIN_LOGINED':
      return {
        ...state,
        admin_logined: payload
      }

      //>user Name

    case 'GET_USER_NAME_VALUE':
      return {
        ...state,
        form_user_name: payload
      }
    case 'SET_USER_NAME_ERROR':
      return {
        ...state,
        form_user_name_errors: payload
      }
    case 'SET_USER_NAME_VALID':
      return {
        ...state,
        form_user_name_valid: payload
      }

      //>user Password

    case 'GET_USER_PASSWORD_VALUE':
      return {
        ...state,
        form_user_password: payload
      }
    case 'SET_USER_PASSWORD_ERROR':
      return {
        ...state,
        form_user_password_errors: payload
      }
    case 'SET_USER_PASSWORD_VALID':
      return {
        ...state,
        form_user_password_valid: payload
      }

      //admin delete panel

    case 'SET_DELETE_PANEL_DELETE_PART_MODAL_ISOPEN':
      return {
        ...state,
        delete_panel_delete_part_modal_isopen: payload
      }

    case 'SET_DELETE_PANEL_DELETE_LESSON_MODAL_ISOPEN':
      return {
        ...state,
        delete_panel_delete_lesson_modal_isopen: payload
      }

    case 'SET_DELETE_PANEL_DELETE_PART_ID':
      return {
        ...state,
        delete_panel_delete_part_id: payload
      }

    case 'SET_DELETE_PANEL_DELETE_LESSON_INDEX':
      return {
        ...state,
        delete_panel_delete_lesson_index: payload
      }

    case 'SET_DELETE_PANEL_DELETE_TEST_MODAL_ISOPEN':
      return {
        ...state,
        delete_panel_delete_test_modal_isopen: payload
      }


    // test page

    case 'SET_LESSON_TEST':
      return {
        ...state,
        lesson_test_data: payload
      }

    case 'SET_USER_STARTED_TEST':
      return {
        ...state,
        user_started_test: payload
      }

    case 'TEST_SET_TEST_USER_RESULTS_ARR':
      return {
        ...state,
        test_user_results_arr: payload
      }

    case 'TEST_GET_VALUE_SELECTED_USER':
      const {value, id} = payload
      return {
        ...state,
        test_user_results_arr: state.test_user_results_arr.map(item => {
          if (item.question_id === id) {
            if (item.user_answer.filter(ans => ans === value).length === 0) {
              item.user_answer.push(value)
            } else {
              item.user_answer = item.user_answer.filter(item => item !== value)
            }
          }
          return item
        })
      }

    case 'TEST_SET_USER_TEST_RATING':
      return {
        ...state,
        test_user_test_rating: payload
      }

    case 'TEST_SET_USER_FINISH_TEST_MODAL_ISOPEN':
      return {
        ...state,
        test_user_finish_test_modal_isopen: payload
      }

    case 'TEST_SET_USER_TEST_RESULT_MODAL_ISOPEN':
      return {
        ...state,
        test_user_test_result_modal_isopen: payload
      }

    case 'TEST_CLEAR_APP_THEN_USER_FINISH_TEST':
      return {
        ...state,
        test_user_results_arr: [],
        test_user_test_rating: null,
        test_user_finish_test_modal_isopen: false,
        test_user_test_result_modal_isopen: false,
      }

    // add test

    case 'ADD_TEST_SET_PART_INPUT_VALUE':
      return {
        ...state,
        add_test_part_input_value: payload.partValue,
        add_test_part_id: payload.partId,
        add_test_lessons_in_part: payload.lessonCount
      }

    case 'ADD_TEST_GET_LESSON_INPUT_VALUE':
      return {
        ...state,
        add_test_lesson_input_value: payload.lessonValue,
        add_test_lesson_number: payload.lessonNumber,
      }

    case 'ADD_TEST_GET_QUESTION_INPUT_VALUE':
      return {
        ...state,
        add_test_question_input_value: payload
      }

    case 'ADD_TEST_GET_OPTIONS_COUNT_INPUT_VALUE':
      return {
        ...state,
        add_test_options_count: payload
      }

    case 'ADD_TEST_GET_OPTIONS_INPUT_VALUE_1':
      return {
        ...state,
        add_test_option_input_value_1: payload
      }

    case 'ADD_TEST_GET_OPTIONS_INPUT_VALUE_2':
      return {
        ...state,
        add_test_option_input_value_2: payload
      }

    case 'ADD_TEST_GET_OPTIONS_INPUT_VALUE_3':
      return {
        ...state,
        add_test_option_input_value_3: payload
      }

    case 'ADD_TEST_GET_OPTIONS_INPUT_VALUE_4':
      return {
        ...state,
        add_test_option_input_value_4: payload
      }

    case 'ADD_TEST_GET_OPTIONS_INPUT_VALUE_5':
      return {
        ...state,
        add_test_option_input_value_5: payload
      }

    case 'ADD_TEST_GET_OPTIONS_INPUT_VALUE_6':
      return {
        ...state,
        add_test_option_input_value_6: payload
      }

    case 'ADD_TEST_SET_OPTION_CORRECT_1':
      return {
        ...state,
        add_test_is_option_1_correct: payload
      }

    case 'ADD_TEST_SET_OPTION_CORRECT_2':
      return {
        ...state,
        add_test_is_option_2_correct: payload
      }

    case 'ADD_TEST_SET_OPTION_CORRECT_3':
      return {
        ...state,
        add_test_is_option_3_correct: payload
      }

    case 'ADD_TEST_SET_OPTION_CORRECT_4':
      return {
        ...state,
        add_test_is_option_4_correct: payload
      }

    case 'ADD_TEST_SET_OPTION_CORRECT_5':
      return {
        ...state,
        add_test_is_option_5_correct: payload
      }

    case 'ADD_TEST_SET_OPTION_CORRECT_6':
      return {
        ...state,
        add_test_is_option_6_correct: payload
      }

    case 'ADD_TEST_SET_QUESTION_RATING':
      return {
        ...state,
        add_test_question_rating: payload
      }

    case 'ADD_TEST_CLEAR_QUESTION_CONTENT_VALUES':
      return {
        ...state,
        add_test_lessons_in_part: 0,
        add_test_lesson_input_value: '',
        add_test_lesson_number: 0,
        add_test_question_input_value: '',
        add_test_options_count: 0,
        add_test_option_input_value_1: '',
        add_test_option_input_value_2: '',
        add_test_option_input_value_3: '',
        add_test_option_input_value_4: '',
        add_test_option_input_value_5: '',
        add_test_option_input_value_6: '',
        add_test_question_answers: [],
        add_test_is_option_1_correct: false,
        add_test_is_option_2_correct: false,
        add_test_is_option_3_correct: false,
        add_test_is_option_4_correct: false,
        add_test_is_option_5_correct: false,
        add_test_is_option_6_correct: false,
        add_test_question_rating: 1,
      }

    case 'ADD_TEST_SET_QUESTIONS_ARR':
      return {
        ...state,
        add_test_questions_arr: payload
      }

    case 'ADD_TEST_CLEAR_QUESTION_FORM_THEN_QUESTION_ADDED':
      return {
        ...state,
        add_test_question_input_value: '',
        add_test_options_count: 0,
        add_test_option_input_value_1: '',
        add_test_option_input_value_2: '',
        add_test_option_input_value_3: '',
        add_test_option_input_value_4: '',
        add_test_option_input_value_5: '',
        add_test_option_input_value_6: '',
        add_test_question_answers: [],
        add_test_is_option_1_correct: false,
        add_test_is_option_2_correct: false,
        add_test_is_option_3_correct: false,
        add_test_is_option_4_correct: false,
        add_test_is_option_5_correct: false,
        add_test_is_option_6_correct: false,
        add_test_question_rating: 1,
      }

    case 'ADD_TEST_SET_NEW_TEST_MODAL_ISOPEN':
      return {
        ...state,
        add_test_new_test_modal_isopen: payload
      }

    case 'ADD_TEST_SET_CONFIRM_SENT_TEST_MODAL_ISOPEN':
      return {
        ...state,
        add_test_confirm_sent_test_modal_isopen: payload
      }

    case 'ADD_TEST_CLEAR_FORM_AFTER_TEST_POST':
      return {
        ...state,
        parts: null,
        add_test_part_input_value: '',
        add_test_part_id: null,
        add_test_lessons_in_part: 0,
        add_test_lesson_input_value: '',
        add_test_lesson_number: 0,

        add_test_questions_arr: [],

        add_test_question_input_value: '',
        add_test_options_count: 0,
        add_test_option_input_value_1: '',
        add_test_option_input_value_2: '',
        add_test_option_input_value_3: '',
        add_test_option_input_value_4: '',
        add_test_option_input_value_5: '',
        add_test_option_input_value_6: '',
        add_test_question_answers: [],
        add_test_is_option_1_correct: false,
        add_test_is_option_2_correct: false,
        add_test_is_option_3_correct: false,
        add_test_is_option_4_correct: false,
        add_test_is_option_5_correct: false,
        add_test_is_option_6_correct: false,
        add_test_question_rating: 1,

        add_test_new_test_modal_isopen: false,
        add_test_confirm_sent_test_modal_isopen: false
      }

    //admin edit lesson

    case 'SET_EDIT_LESSON_DATA':
      return {
        ...state,
        edit_lesson_data: payload.data,
        edit_lesson_part_id: payload.partId,
        edit_lesson_part_number: payload.partNum
      }

    case 'EDIT_LESSON_GET_EDIT_MODULE_VALUE':
      return {
        ...state,
        edit_lesson_edit_module_input_value: payload
      }

    case 'EDIT_LESSON_SET_EDIT_MODULE_DATA':
      return {
        ...state,
        edit_lesson_edit_module_input_value: payload.value,
        edit_lesson_module_edit_bool: payload.bool,
        edit_lesson_edit_module_type: payload.type,
        edit_lesson_edit_module_number: payload.number
      }

    case 'EDIT_LESSON_CLEAR_EDIT_BLOCK':
      return {
        ...state,
        edit_lesson_edit_module_input_value: '',
        edit_lesson_module_edit_bool: false,
        edit_lesson_edit_module_type: null,
        edit_lesson_edit_module_number: ''
      }

    case 'EDIT_LESSON_SET_ADD_MODULE_TYPE':
      return {
        ...state,
        edit_lesson_add_module_type: payload
      }

    case 'EDIT_LESSON_GET_ADD_MODULE_BIG_TITLE':
      return {
        ...state,
        edit_lesson_add_module_big_title: payload
      }

    case 'EDIT_LESSON_GET_ADD_MODULE_SMOLL_TITLE':
      return {
        ...state,
        edit_lesson_add_module_smoll_title: payload
      }

    case 'EDIT_LESSON_GET_ADD_MODULE_TEXT':
      return {
        ...state,
        edit_lesson_add_module_text: payload
      }

    case 'EDIT_LESSON_GET_ADD_MODULE_IMG':
      return {
        ...state,
        edit_lesson_add_module_img: payload
      }

    case 'EDIT_LESSON_GET_ADD_MODULE_VIDEO':
      return {
        ...state,
        edit_lesson_add_module_video: payload
      }

    case 'EDIT_LESSON_CREAR_ADD_MODULE_BLOCK':
      return {
        ...state,
        edit_lesson_add_module_type: '',
        edit_lesson_add_module_big_title: '',
        edit_lesson_add_module_smoll_title: '',
        edit_lesson_add_module_text: '',
        edit_lesson_add_module_img: '',
        edit_lesson_add_module_video: ''
      }

    case 'EDIT_LESSON_SET_LESSON_TITLE_EDIT_BOOL':
      return {
        ...state,
        edit_lesson_lesson_title_edit_bool: payload,
        edit_lesson_module_edit_bool: payload
      }

    case 'EDIT_LESSON_SET_LESSON_TITLE_VALUE':
      return {
        ...state,
        edit_lesson_lesson_title_value: payload
      }

    case 'EDIT_LESSON_CLEAR_PAGE':
      return {
        ...state,

        edit_lesson_edit_module_input_value: '',
        edit_lesson_module_edit_bool: false,
        edit_lesson_edit_module_type: null,
        edit_lesson_edit_module_number: '',
        edit_lesson_lesson_title_edit_bool: false,
        edit_lesson_lesson_title_value: '',

        edit_lesson_add_module_type: '',
        edit_lesson_add_module_big_title: '',
        edit_lesson_add_module_smoll_title: '',
        edit_lesson_add_module_text: '',
        edit_lesson_add_module_img: '',
        edit_lesson_add_module_video: ''
      }

    //Admin Group Log


    case 'A_GROUP_LOG_SET_RETAKING_MODE':
      return {
        ...state,
        a_group_log_retaking_mode_is_on: !state.a_group_log_retaking_mode_is_on,
      }

    case 'A_GROUP_LOG_SET_RETAKING_MODAL_IS_OPEN':
      return {
        ...state,
        a_group_log_retaking_modal_is_open: payload
      }

    case 'A_GROUP_LOG_SET_RETAKING_USER_DATA':
      return {
        ...state,
        a_group_log_retaking_user_data: payload
      }

    case 'A_GROUP_LOG_CLEAR_PAGE':
      return {
        ...state,
        a_group_log_retaking_mode_is_on: false,
        a_group_log_retaking_modal_is_open: false,
        a_group_log_retaking_user_data: null,
      }

    //Admin Group Log Management

    case 'A_GROUP_LOG_MNG_SET_EDIT_MODE_IS_ON':
      return {
        ...state,
        a_group_log_mng_edit_mode_is_on: payload
      }

    case 'A_GROUP_LOG_MNG_SET_ADD_MODE_IS_ON':
      return {
        ...state,
        a_group_log_mng_add_mode_is_on: payload
      }

    case 'A_GROUP_LOG_MNG_SET_EDITED_USER_INFORMATION':
      return {
        ...state,
        a_group_log_mng_edited_user_information: payload
      }

    case 'A_GROUP_LOG_MNG_SET_USER_FULL_NAME':
      return {
        ...state,
        a_group_log_mng_user_fullname: payload
      }

    case 'A_GROUP_LOG_MNG_SET_USER_LOGIN':
      return {
        ...state,
        a_group_log_mng_user_login: payload
      }

    case 'A_GROUP_LOG_MNG_SET_USER_PASSWORD':
      return {
        ...state,
        a_group_log_mng_user_password: payload
      }

    case 'A_GROUP_LOG_MNG_SET_CONFIRM_ADD_USER_MODAL_IS_OPEN':
      return {
        ...state,
        a_group_log_mng_confirm_add_user_modal_is_open: payload
      }

    case 'A_GROUP_LOG_MNG_SET_CONFIRM_DELETE_USER_MODAL_IS_OPEN':
      return {
        ...state,
        a_group_log_mng_confirm_delete_user_modal_is_open: payload
      }

    case 'A_GROUP_LOG_MNG_SET_CONFIRM_POST_EDITED_USER_MODAL_IS_OPEN':
      return {
        ...state,
        a_group_log_mng_confirm_post_edited_user_modal_is_open: payload
      }

    case 'A_GROUP_LOG_MNG_CLEAR_PAGE':
      return {
        ...state,
        a_group_log_mng_edit_mode_is_on: false,
        a_group_log_mng_add_mode_is_on: false,
        a_group_log_mng_user_fullname: '',
        a_group_log_mng_user_login: '',
        a_group_log_mng_user_password: '',
        a_group_log_mng_edited_user_information: null,
        a_group_log_mng_confirm_add_user_modal_is_open: false,
        a_group_log_mng_confirm_delete_user_modal_is_open: false,
        a_group_log_mng_confirm_post_edited_user_modal_is_open: false,
      }

    default:
      return state;
  }
}
