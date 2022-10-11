import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./component/componentExports";
import { Home, Info } from "./pages/pageExports";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [currentURL, setCurrentURL] = useState(API_URL);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  useEffect(() => {
    fetchAPI();
  }, [currentURL]);

  const fetchAPI = async () => {
    const res = await fetch(currentURL);
    const data = await res.json();
    setNextURL(data.next);
    setPrevURL(data.previous);

    const getPokemons = (arr) => {
      let array = [];
      arr.map(async (el) => {
        const result = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${el.name}`
        );
        const response = await result.json();
        array.push(response);
        setPokemons([...array]);
      });
      array = [];
    };
    getPokemons(data.results);
  };

  const nextButton = () => {
    setCurrentURL(nextURL);
  };
  const prevButton = () => {
    setCurrentURL(prevURL);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route // home route
          path="/"
          element={
            <Home
              pokemons={pokemons}
              nextButton={nextButton}
              prevURL={prevURL}
              prevButton={prevButton}
            />
          }
        />
        <Route path="/:name" element={<Info pokemons={pokemons} />} />
      </Routes>
    </div>
  );
}

export default App;
