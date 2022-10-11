import React from "react";

const PokemonCard = ({ name, image, types }) => {
  const getType = (type) => {
    switch (type) {
      case "electric":
        return `#f8d030`;
      case "grass":
        return `#78c850`;
      case "fire":
        return `#f08030`;
      case "water":
        return `#f08030`;
      default:
        return `#ffffff`;
    }
  };

  return (
    <div className="pokemon-card">
      <img src={image} alt="" width="300px"/>
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
      <p style={{ fontSize: "17px" }}>{types.type.name}</p>
    </div>
  );
};

export default PokemonCard;
