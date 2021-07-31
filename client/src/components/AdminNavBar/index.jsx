import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavBar.scss';

const AdminNavBar = ({
  clearApp
}) => {

  return (
      <div className="admin-nav-bar">
        <div className="page-container">

            <nav className="admin-nav-bar__list">

              <ul className="admin-nav-bar__item">
                <li>
                  <Link to="/">Головна</Link>
                </li>
                <li>
                  <Link to="/parts/">Теми</Link>
                </li>
                <li>
                  <Link to="/group-log/">Журнал групи</Link>
                </li>
              </ul>
              <ul className="admin-nav-bar__item">
                <li>
                  <span onClick={clearApp}>Вийти</span>
                </li>
              </ul>
            </nav>

        </div>
      </div>
  )
}

export default AdminNavBar;
