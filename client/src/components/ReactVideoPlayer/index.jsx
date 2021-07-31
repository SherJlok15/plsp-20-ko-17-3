import React from 'react';
import ReactPlayer from 'react-player'
import './ReactVideoPlayer.scss';

const ReactVideoPlayer = ({url, onReady}, ...props) => {
  return (
    <div className="player-container">
      <div className="player-wrapper">
        <ReactPlayer
          className='react-player'
          url={url}
          width='100%'
          height='100%'
          controls
          loop
          light
        />
      </div>
    </div>
  )
}

export default ReactVideoPlayer;
