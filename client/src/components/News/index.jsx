import React from 'react';
import Fade from 'react-reveal/Fade';
import './News.scss';

const News = ({ news, admin_logined, deleteNews }) => {
  return (
    <Fade left>
      <div className="all-news">

          <h3 className="title_3">Новини</h3>
          {
            news === null || news.length === 0 ?
            <h3 className="is-empty">Немає новин</h3>
            :
              news.sort((a, b) => {
                let dateA = new Date(a.createdAt);
                let dateB = new Date(b.createdAt);
                return dateB - dateA;
              }).map(item =>
                <div key={item._id} className="news">
                  <div className="news__info">
                    <div><span>Автор:</span> {item.news.news_author}</div>
                    <div><span>Час:</span> { new Date(item.createdAt).toLocaleString()}</div>
                  </div>
                  <p className="news__text text">{item.news.news_text}</p>
                  {
                    admin_logined ?
                      <span onClick={() => deleteNews(item._id)} className="smoll-botton-delete">
                        видалити новину
                      </span>
                      :
                      ''
                  }

                </div>
              )

          }
      </div>
    </Fade>
  )
}

export default News;
