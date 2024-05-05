import { Loader } from "./Loader";
import { Rows } from "./Table";

export function Card({ data }: any) {
  if (data.length === 0) {
    return <Loader />;
  }
  const pokemon = {
    name: data[0].name,
    img: data[0].avatar.props.src,
    experience: data[0].experience,
    height: data[0].height,
    weight: data[0].weight,
  }

  return (
    <>
      <h1>{pokemon.name}</h1>
      <img className="cardImage" src={pokemon.img} height="360"></img>
      <div className="cardInfo">
        <h3>Experience: {pokemon.experience}</h3>
        <h3>Height: {pokemon.height}</h3>
        <h3>Weight: {pokemon.weight}</h3>
      </div>
    </>
  );
}
