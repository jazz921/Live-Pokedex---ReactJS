import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "./component/componentExports";
import { Home, Info, Result } from "./pages/pageExports";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [currentURL, setCurrentURL] = useState(API_URL);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");
  const [text, setText] = useState("");
  const [resultPokemon, setResultPokemon] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchAPI();
  }, [currentURL]);

  useEffect(() => {
    searchHandler();
  }, [resultPokemon]);

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
    };
    getPokemons(data.results);
  };

  const nextButton = () => {
    setCurrentURL(nextURL);
  };
  const prevButton = () => {
    setCurrentURL(prevURL);
  };

  const searchHandler = (v) => {
    if (!v) {
      return;
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${v}`)
        .then((res) => res.json())
        .then((data) => {
          setResultPokemon(data);
        });
    }
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
              text={text}
              setText={setText}
              searchHandler={searchHandler}
              resultPokemon={resultPokemon}
              setResultPokemon={setResultPokemon}
            />
          }
        />
        <Route path="/:name" element={<Info pokemons={pokemons} />} />
        <Route
          path="/result"
          element={<Result resultPokemon={resultPokemon} />}
        />
      </Routes>
    </div>
  );
}

export default App;
