import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import cover from '../static/img/shershaah.webp';
import { IconHeart } from '@tabler/icons-react';

const SongCard = () => {
  const { albumId } = useParams();
  const [data, setData] = useState(null);

  const fetchSongs = () => {
    fetch(`https://saavn.me/albums?id=${albumId}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        setData(response.data);
      });
    //   .then(response => {
    //     setData(response.songs);
    //   });
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <React.Fragment>
      {data &&
        data.songs.map(song => {
          return (
            <div className="flex mb-1 p-3">
              <Link to={`/songs/${albumId}/${song.id}`}>
                <img
                  src={song.image[1].link}
                  alt={song.name}
                  className="w-12 h-12 rounded flex-none"
                />
                <div className="px-3 flex-1 w-52">
                  <h2 className="truncate font-medium">{song.name}</h2>
                  <p className="text-sm truncate">{song.primaryArtists}</p>
                </div>
              </Link>
              <button>
                <IconHeart />
              </button>
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default SongCard;
