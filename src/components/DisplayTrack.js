import React from 'react';
import cover from '../static/img/shershaah.webp';

const DisplayTrack = ({ currentTrack, audioRef }) => {
  return (
    <div className="flex">
      <img src={cover} alt="song-name" className="w-12 rounded" />
      <div className="px-3">
        <h2>Track name goes here</h2>
        <p className="text-sm">Artist names goes here</p>
      </div>
      <audio src={currentTrack} ref={audioRef} />
    </div>
  );
};

export default DisplayTrack;
