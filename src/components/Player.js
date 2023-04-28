import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DisplayTrack from './DisplayTrack';
import Controls from './Controls';

const Player = () => {
  const { albumId, songId } = useParams();
  const [data, setData] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  const fetchSong = () => {
    fetch(`https://saavn.me/songs?id=${songId}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        setData(response.data);
      });
  };
 
  useEffect(() => {
    fetchSong();

  }, []);

  const audioRef = useRef();
  console.log(audioRef);
  return (
    <div className="container flex p-3 justify-between">
      {console.log(data)}
      <DisplayTrack currentTrack={data && data[0].downloadUrl[4].link} audioRef={audioRef} />
      <Controls audioRef={audioRef} />
      {data && data[0].downloadUrl[4].link}
    </div>
  );
};

export default Player;
