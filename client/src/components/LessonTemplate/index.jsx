import React from 'react';
import {ReactVideoPlayer} from '../';

import './LessonTemplate.scss';

const LessonTemplate = ({ item }) => {
  const {lesson_title, lesson_text } = item
  return (
    <div className="lesson-template">
      <div className="lesson-template__title title_1">{lesson_title}</div>
      {
        lesson_text.map(mod =>
          <div key={Math.random()}>
            {
              mod.module_type === 'title_big' ?
              <div className="lesson-template__title-big title_2">
                <h1>{mod.module_value}</h1>
              </div> :
              mod.module_type === 'title_smoll' ?
              <div className="lesson-template__title-smoll title_3">
                <h4>{mod.module_value}</h4>
              </div> :
              mod.module_type === 'text' ?
              <div className="lesson-template__text text">
                <p>{mod.module_value}</p>
              </div> :
              mod.module_type === 'img' ?
              <div className="lesson-template__img">
                <img src={mod.module_value} alt="img"/>
              </div> :
              mod.module_type === 'video' ?
              <div className="lesson-template__video">
                <ReactVideoPlayer url={mod.module_value}/>
              </div> :
              ''
            }
          </div>
        )
      }
    </div>
  )
}

export default LessonTemplate;
