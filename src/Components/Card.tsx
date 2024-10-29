import { Pokemon } from "../models";


export function Card({ pokemon }: { pokemon: Pokemon | undefined }) {
  if (!pokemon) {
    return <h3>Pick any pokemon to see the details</h3>;
  }

  return (
    <>
      <h1>{pokemon.name}</h1>
      <img className="cardImage" src={pokemon.avatar} height="360"></img>
      <div className="cardInfo">
        <h3>Experience: {pokemon.experience}</h3>
        <h3>Height: {pokemon.height}</h3>
        <h3>Weight: {pokemon.weight}</h3>
      </div>
    </>
  );
}
