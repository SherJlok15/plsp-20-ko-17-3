import { axios } from '../../core';

export default {
  getParts: () => axios.get('/parts/'),
  getPart: (id) => axios.get('/parts/'+id),
  getUsers: () => axios.get('/users/'),
  addNewUser: (user) => axios.post('/users/add/', user),
  deleteUser: (user) => axios.post('/users/delete/', user),
  postEditedUser: (prevUserInfo, newUserInfo) => axios.post('/users/post-edited-user/', {prevUserInfo, newUserInfo}),
  postNewLesson: (id, newLesson, newPartTitle) => axios.post(`/parts/addnewlesson/${id}/`, newPartTitle ? {newLesson,newPartTitle}  : newLesson),
  getNews: () =>  axios.get('/news/'),
  postNews: (newNews) =>  axios.post('/news/add/', newNews),
  deleteNews: (id) =>  axios.delete('/news/delete/'+id),
  deletePart: (id) => axios.delete('/parts/delete/'+id),
  deleteLesson: (id, lessonIndex) => axios.post(`/parts/delete/lesson/${id}/${lessonIndex}`),
  deleteTest: (id, lessonIndex) => axios.post(`/parts/delete/test/${id}/${lessonIndex}`),
  sortParts: () => axios.post('/parts/sort'),
  postNewTest: (id, lesNumb, test) => axios.post(`/parts/add-test/${id}/${lesNumb}`, test),
  checkUserTestResult: (id, lesNumb, userName) => axios.get(`/parts/check-test-result/${id}/${lesNumb}/${userName}`),
  postUserTestResult: (id, lesNumb, result) => axios.post(`/parts/add-test-result/${id}/${lesNumb}`, result),
  postEditedModule: (id, lesNumb, modNum, modVal) => axios.post(`/parts/edited-module/${id}/${lesNumb}/${modNum}/`, modVal),
  deleteModule: (id, lesNumb, modNum) => axios.post(`/parts/delete-module/${id}/${lesNumb}/${modNum}/`),
  moveModule: (id, lesNumb, modNum, modInd, direction) => axios.post(`/parts/move-module/${id}/${lesNumb}/${modNum}/${modInd}/${direction}`),
  postNewModule: (id, lesNumb, mod) => axios.post(`/parts/add-module/${id}/${lesNumb}/`, mod),
  postNewLessonTitle: (id, lesNumb, title) => axios.post(`/parts/add-new-lesson-title/${id}/${lesNumb}/`, title),
  retakingClearUserResult: (id, lesNumb, userName) => axios.post(`/parts/retaking-clear-user-result/${id}/${lesNumb}/${userName}`),
  getLessonTestDraft: (id, lessonNumb) => axios.get(`/parts/lesson-test-draft/${id}/${lessonNumb}/`),
  addLessonTestDraft: (id, lessonNumb, draft) => axios.post(`/parts/add-lesson-test-draft/${id}/${lessonNumb}/`, draft),
  addQuestionToLessonTestDraft: (id, lessonNumb, question) => axios.post(`/parts/lesson-test-draft-add-question/${id}/${lessonNumb}/`, question),
}
