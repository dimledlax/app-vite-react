import { Loader } from "./Loader";
import { Rows } from "./Table";


export function Card({ data }: any) {
  if (!data) {
    return <h3>Pick any pokemon to see the details</h3>;
  }

  const pickedPokemon = {
    name: data.name.toUpperCase(),
    avatar: data.sprites.front_default,
    experience: data.base_experience,
    height: data.height,
    weight: data.weight,
  }

  return (
    <>
      <h1>{pickedPokemon.name}</h1>
      <img className="cardImage" src={pickedPokemon.avatar} height="360"></img>
      <div className="cardInfo">
        <h3>Experience: {pickedPokemon.experience}</h3>
        <h3>Height: {pickedPokemon.height}</h3>
        <h3>Weight: {pickedPokemon.weight}</h3>
      </div>
    </>
  );
}
