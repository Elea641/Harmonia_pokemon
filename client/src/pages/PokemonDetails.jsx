import { Link, useLoaderData } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

function PokemonDetails() {
  const pokemon = useLoaderData();
  return (
    <>
      <Link to={`/pokemon/edition/${pokemon.id}`}>
        <h2>EDIT</h2>
      </Link>
      <PokemonCard pokemon={pokemon} />
    </>
  );
}

export default PokemonDetails;
