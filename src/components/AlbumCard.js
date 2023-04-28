import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const AlbumCard = () => {
  const [data, setData] = useState(null);

  const fetchSongs = () => {
    fetch(
      'https://jiosaavn-9xiqlxb6q-vikrammahto.vercel.app/modules?language=hindi'
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        setData(response.data);
      });
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <React.Fragment>
      <div className="flex flex-wrap justify-around">
        {data &&
          data.albums.map(album => {
            return (
              <div key={album.id} className="p-3 bg-slate-100 rounded w-48">
                {/* <img
                  src={album.image[1].link}
                  alt={album.name}
                  className="rounded h-40"
                />
                <h2 className="my-1 text-lg truncate">{album.name}</h2>
                <p className="">Vikram Mahto</p> */}
                <Link to={`/songs/${album.id}`}>
                  <img
                    src={album.image[1].link}
                    alt={album.name}
                    className="rounded h-40"
                  />
                  <h2 className="my-1 font-medium truncate">{album.name}</h2>
                  <p className="text-sm">Vikram Mahto</p>
                </Link>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default AlbumCard;
