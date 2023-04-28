import React, { useEffect, useState } from 'react';
import {
  IconPlayerPlayFilled,
  IconPlayerPauseFilled,
  IconPlayerSkipForwardFilled,
  IconPlayerSkipBackFilled,
} from '@tabler/icons-react';
const Controls = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);
    
  return (
    <div className="flex align-middle">
      <button className='p-1'>
        <IconPlayerSkipBackFilled />
      </button>
      <button onClick={togglePlayPause} className='p-1'>
        {isPlaying ? <IconPlayerPauseFilled /> : <IconPlayerPlayFilled />}
      </button>
      <button className='p-1'>
        <IconPlayerSkipForwardFilled />
      </button>
    </div>
  );
}

export default Controls;
