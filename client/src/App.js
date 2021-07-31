import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NavBar } from './components';
import {
   Parts, FullPart, HomePage, FullUser, FullLesson, FullTest,
   AdminPage, AdminNavBar, AdminAddLesson, AdminAddLessonNewLessonModal,
   AdminFullTest, AdminAddNews, AdminGroupLog, AdminDeletePanel, AdminAddTest,
   AdminAddTestNewTestModal, UserTestResultModal, AdminEditLesson, AdminGroupLogManagement,
   HelpInformationModal
 } from './modules';

function App({ user_logined, admin_logined, user_logined_data, clearApp, ...props}) {
  return (
    <div className="App">
        <header className="header">

          {
            user_logined && props.location.pathname !== '/test/' ?
              <NavBar user_logined_data={user_logined_data} clearApp={clearApp}/> :
              ''
          }

          {
            admin_logined ?
              <AdminNavBar /> :
              ''
          }

        </header>

        <main className="main">
          {admin_logined || user_logined ? <HelpInformationModal/> : ''}

          <Switch>
            <Route exact path="/" component={HomePage}/>

            {user_logined ?
              <>
                <Route exact path="/user/" component={FullUser}/>
                <Route exact path="/lesson/" component={FullLesson}/>
                <Route exact path="/parts/" component={Parts}/>
                <Route exact path="/parts/:id" component={FullPart}/>
                <Route exact path="/test/" component={FullTest}/>
                <UserTestResultModal />
              </> :
                admin_logined ?
                  <>
                    <Route exact path="/admin/" component={AdminPage}/>
                    <Route exact path="/admin/add-lesson/" component={AdminAddLesson}/>
                    <Route exact path="/lesson/" component={FullLesson}/>
                    <Route exact path="/parts/" component={Parts}/>
                    <Route exact path="/parts/:id" component={FullPart}/>
                    <Route exact path="/test/" component={AdminFullTest}/>
                    <Route exact path="/add-news/" component={AdminAddNews}/>
                    <Route exact path="/group-log/" component={AdminGroupLog}/>
                    <Route exact path="/group-log-management/" component={AdminGroupLogManagement}/>
                    <Route exact path="/delete-panel/" component={AdminDeletePanel}/>
                    <Route exact path="/add-test/" component={AdminAddTest}/>
                    <Route exact path="/edit-lesson/" component={AdminEditLesson}/>
                    <AdminAddLessonNewLessonModal />
                    <AdminAddTestNewTestModal />
                  </>
                  :
                  <Redirect to="/"/>
            }

          </Switch>

        </main>
    </div>
  );
}

export default App;
