import React, { useState } from "react";
import uuid from "uuid/dist/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: "almost home" },
    { id: 2, title: "memory gospel" },
    { id: 3, title: "this wild darkness" },
  ]);
  const [age, setAge] = useState(20);

  const addSong = (title) => {
    console.log("SongList title :", title);
    setSongs([...songs, { id: uuid(), title }]);
  };
  useEffect(() => {
    console.log("useEffect callback", songs);
  }, [songs]);
  useEffect(() => {
    console.log("useEffect callback", age);
  }, [age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
