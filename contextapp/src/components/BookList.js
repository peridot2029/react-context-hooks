import React, { useContext } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 01fdce7a298fb3d2ab0365785d447ab0d812b897
import { ThemeContext } from "./../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
<<<<<<< HEAD
=======
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
>>>>>>> lesson-14
=======
>>>>>>> 01fdce7a298fb3d2ab0365785d447ab0d812b897
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
<<<<<<< HEAD
<<<<<<< HEAD
        <li style={{ background: theme.ui }}>the way of kings</li>
        <li style={{ background: theme.ui }}>the name of the wind</li>
        <li style={{ background: theme.ui }}>the final empire</li>
=======
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
>>>>>>> lesson-14
=======
        <li style={{ background: theme.ui }}>the way of kings</li>
        <li style={{ background: theme.ui }}>the name of the wind</li>
        <li style={{ background: theme.ui }}>the final empire</li>
>>>>>>> 01fdce7a298fb3d2ab0365785d447ab0d812b897
      </ul>
    </div>
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> lesson-14
=======
>>>>>>> 01fdce7a298fb3d2ab0365785d447ab0d812b897
export default BookList;
