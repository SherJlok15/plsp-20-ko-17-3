import React from 'react';
import Fade from 'react-reveal/Fade';
import './AdminAddNews.scss';

const AdminAddNews = ({
   news, add_news_text, getNewsInputValue, postNewNews, ...props
 }) => {
  return (
    <div className="page-container">
      <Fade>
      <div className="admin-add-news">
        <h3 className="title_1 admin-add-news__title">Форма додавання новин</h3>
        <form
          onSubmit={(e) => postNewNews(e, props.history)}
          className="admin-add-news__form"
        >
          <label>
            <span className="title_3">Текст новини:</span>
            <input
              type="text"
              value={add_news_text}
              onChange={(e) => getNewsInputValue(e.target.value)}
              placeholder="Введіть новину"
            />
          </label>
          <button
            disabled={add_news_text !== '' ? false : true}
            className={add_news_text !== '' ? "button" : "button--disabled"}
          >
            Відправити новину
          </button>
        </form>
      </div>
      </Fade>
    </div>
  )
}

export default AdminAddNews;
