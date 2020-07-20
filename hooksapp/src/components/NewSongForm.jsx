import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    console.log("NewSongForm title :", title);
=======
>>>>>>> lesson-14
    addSong(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name :</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="add song" />
    </form>
  );
};
export default NewSongForm;
