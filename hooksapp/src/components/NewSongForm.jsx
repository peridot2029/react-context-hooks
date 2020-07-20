import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
    console.log("NewSongForm title :", title);
=======
>>>>>>> lesson-14
=======
    console.log("NewSongForm title :", title);
>>>>>>> 01fdce7a298fb3d2ab0365785d447ab0d812b897
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
