import React from "react";

function PokeCard(PokeData) {
  return (
    <>
      <h1>{PokeData.name}</h1>
      <img src={PokeData.sprites.front_default} alt="Pokemon front" />
      <img src={PokeData.sprites.front_shiny} alt="Shiny Pokemon front" />
      <a href={PokeData.video}>Pokemon video</a>
    </>
  );
}

export default PokeCard;
