import React from "react";
import { Link, useParams } from "react-router-dom";

const Info = ({ pokemons }) => {
  const { name } = useParams();

  const pokeInfo = pokemons.find((item) => item.name === name);

  return (
    <div className="info">
      <div className="info-container">
        <div className="stats">
          <h1>
            {/* {pokeInfo.name.charAt(0).toUpperCase() + pokeInfo.name.slice(1)} */}
            {pokeInfo.name.toUpperCase()}
          </h1>
          <span>Level 1</span>
          <table border={1}>
            <thead>
              <tr>
                <th>STATS NAME</th>
                <th style={{ padding: "5px 10px" }}>POINTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HP</td>
                <td>{pokeInfo.stats[0].base_stat}</td>
              </tr>
              <tr>
                <td>ATTACK</td>
                <td>{pokeInfo.stats[1].base_stat}</td>
              </tr>
              <tr>
                <td>DEFENSE</td>
                <td>{pokeInfo.stats[2].base_stat}</td>
              </tr>
              <tr>
                <td>SP ATTACK</td>
                <td>{pokeInfo.stats[3].base_stat}</td>
              </tr>
              <tr>
                <td>SP. DEFENSE</td>
                <td>{pokeInfo.stats[4].base_stat}</td>
              </tr>
              <tr>
                <td>SPEED</td>
                <td>{pokeInfo.stats[5].base_stat}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="img">
          <img
            src={pokeInfo.sprites.other["official-artwork"].front_default}
            alt=""
            width="200"
          />
          <h2>
            {pokeInfo.types[0].type.name.charAt(0).toUpperCase() +
              pokeInfo.types[0].type.name.slice(1)}
          </h2>
          <div>
            <h2>Abilities:</h2>
            {pokeInfo.abilities.map((el) => (
              <p key={Math.random() * 100}>
                {el.ability.name.charAt(0).toUpperCase() +
                  el.ability.name.slice(1)}
              </p>
            ))}
          </div>
        </div>
        
      </div>

      <Link to="/">Back</Link>
    </div>
  );
};

export default Info;
