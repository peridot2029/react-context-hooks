import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
<<<<<<< HEAD
=======
import BookContextProvider from "./contexts/BookContext";
>>>>>>> lesson-14

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
<<<<<<< HEAD
          <BookList />
=======
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
>>>>>>> lesson-14
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
