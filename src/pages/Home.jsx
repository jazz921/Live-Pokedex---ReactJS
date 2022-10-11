import React from "react";
import PokemonCard from "../component/PokemonCard";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Home = ({ pokemons, nextButton, prevButton, prevURL }) => {
  return (
    <div className="home">
      <div className="container">
        {pokemons.map((pokemon) => (
          <Link to={`/${pokemon.name}`} key={pokemon.name}>
            <PokemonCard
              name={pokemon.name}
              // image={pokemon.sprites.other["official-artwork"].front_default}
              image={pokemon.sprites.front_default}
              types={pokemon.types[0]}
            />
          </Link>
        ))}
      </div>
      <Pagination
        nextButton={nextButton}
        prevButton={prevButton}
        prevURL={prevURL}
      />
      <Footer />
    </div>
  );
};

export default Home;
