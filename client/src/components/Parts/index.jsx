import React from 'react';
import { Link } from 'react-router-dom';
import loading from '../../img/loading.svg';
import './Parts.scss';

const Parts = ({ parts }) => {
  return (
    <div className="page-container">

        <div className="all-parts">
          <h3 className="all-parts__title title_2">Теми</h3>
          {
          parts !== null ?  parts.map(item =>
            <div key={item._id} className="all-parts__part">
              <Link to={'/parts/'+item._id} className="all-parts__part-link button">
                <h3>{item.partNumber}</h3>
                <span>{item.partName}</span>
              </Link>
            </div>
            )
            :
            <div className="preloader"><img src={loading} alt="loading"/> Loading...</div>
          }
        </div>

    </div>
  )
}

export default Parts;
