import React from "react";
import cover from "../static/img/shershaah.webp";

const SongCard = () => {
  return (
    <div className="p-3 bg-slate-100 inline-block rounded">
      <img src={cover} alt="album-cover" className="rounded h-32" />
      <h2 className="my-1 text-lg">Shershaah</h2>
      <p className="m-0 text-sm">Vikram Mahto</p>
    </div>
  );
};

export default SongCard;
