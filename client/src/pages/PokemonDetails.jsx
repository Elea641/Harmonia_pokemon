import { Link, useLoaderData } from "react-router-dom";

function PokemonDetails() {
  const pokemon = useLoaderData();
  const types = pokemon.types.split(",");
  return (
    <>
      <Link to={`/pokemon/edition/${pokemon.id}`}>
        <h2>EDIT</h2>
      </Link>
      {/* <PokemonCard pokemon={pokemon} /> */}
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image_url} alt={pokemon.name} />
      {types.map((type) => (
        <p key={type.id} value={type.name}>
          {type}
        </p>
      ))}
    </>
  );
}

export default PokemonDetails;
