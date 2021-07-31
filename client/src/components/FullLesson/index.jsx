import React from 'react';
import { LessonTemplate } from '../';
import './FullLesson.scss';

const FullLesson = ({  lesson_data }) => {

  return (

      <div className="page-container">

          {
            lesson_data.map(item =>
              <LessonTemplate item={item} key={item.lesson_number+Math.random()}/>
            )
          }

      </div>

  )
}

export default FullLesson;
