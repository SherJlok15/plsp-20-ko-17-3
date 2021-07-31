import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './AdminPage.scss';

const AdminPage = () => {
  return (
    <div className="page-container">
      <Fade>
        <div className="admin-page">
          <div className="admin-page__container">
            <Link to="/admin/add-lesson/" className="button">Додати урок</Link>
            <Link to="/add-test/" className="button">Додати тест</Link>
            <Link to="/add-news/" className="button">Додати новину</Link>
            <Link to="/group-log-management/" className="button">Керування журналом</Link>
            <Link to="/delete-panel/" className="button"><span>Панель видалення</span></Link>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default AdminPage;
