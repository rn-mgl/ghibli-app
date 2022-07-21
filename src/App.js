import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./COMPONENTS/SharedLayout";
import About from "./PAGES/About";
import Contacts from "./PAGES/Contacts";
import Error from "./PAGES/Error";
import SingleFilm from "./COMPONENTS/SingleFilm";
import Home from "./PAGES/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path=":filmId" element={<SingleFilm />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
