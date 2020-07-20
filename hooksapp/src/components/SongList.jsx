import React, { useState } from "react";
import uuid from "uuid/dist/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: "almost home" },
    { id: 2, title: "memory gospel" },
    { id: 3, title: "this wild darkness" },
  ]);
  const addSong = () => {
    setSongs([...songs, { id: uuid(), title: "new song" }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add a song</button>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
