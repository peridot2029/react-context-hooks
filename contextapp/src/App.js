import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import BookContextProvider from "./contexts/BookContext";
>>>>>>> lesson-14
=======
>>>>>>> 01fdce7a298fb3d2ab0365785d447ab0d812b897

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
<<<<<<< HEAD
<<<<<<< HEAD
          <BookList />
=======
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
>>>>>>> lesson-14
=======
          <BookList />
>>>>>>> 01fdce7a298fb3d2ab0365785d447ab0d812b897
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
