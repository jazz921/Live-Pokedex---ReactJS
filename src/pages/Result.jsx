import React from 'react'
import { Link } from "react-router-dom"

const Test = ({resultPokemon}) => {

  return (
    <div className="info">
    <div className="info-container">
      <div className="stats">
        <h1>
          {/* {pokeInfo.name.charAt(0).toUpperCase() + pokeInfo.name.slice(1)} */}
          {resultPokemon.name.toUpperCase()}
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
              <td>{resultPokemon.stats[0].base_stat}</td>
            </tr>
            <tr>
              <td>ATTACK</td>
              <td>{resultPokemon.stats[1].base_stat}</td>
            </tr>
            <tr>
              <td>DEFENSE</td>
              <td>{resultPokemon.stats[2].base_stat}</td>
            </tr>
            <tr>
              <td>SP ATTACK</td>
              <td>{resultPokemon.stats[3].base_stat}</td>
            </tr>
            <tr>
              <td>SP. DEFENSE</td>
              <td>{resultPokemon.stats[4].base_stat}</td>
            </tr>
            <tr>
              <td>SPEED</td>
              <td>{resultPokemon.stats[5].base_stat}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="img">
        <img
          src={resultPokemon.sprites.other["official-artwork"].front_default}
          alt=""
          width="200"
        />
        <h2>
          {resultPokemon.types[0].type.name.charAt(0).toUpperCase() +
            resultPokemon.types[0].type.name.slice(1)}
        </h2>
        <div>
          <h2>Abilities:</h2>
          {resultPokemon.abilities.map((el) => (
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
  )
}

export default Test