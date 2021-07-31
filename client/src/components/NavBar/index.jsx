import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './NavBar.scss';

const NavBar = ({
  user_logined_data, clearApp
}) => {

  return (
    <Fade top>
      <div className="header-navbar">
        <div className="page-container  ">
          <nav className="header-navbar__list">
            <ul>
              <li>
                <Link to="/">Головна</Link>
              </li>
              <li>
                <Link to="/user/">{user_logined_data[0].user_fullname}</Link>
              </li>
            </ul>
            <ul>
              <li>
                <span onClick={clearApp}>Вийти</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Fade>
  )
}

export default NavBar;
