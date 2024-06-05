import { Link, useLoaderData } from "react-router-dom";
import PokemonCardDetails from "../components/PokemonCardDetails";

function PokemonDetails() {
  const pokemon = useLoaderData();
  const types = pokemon.types.split(",");
  return (
    <>
      <Link to={`/pokemon/edition/${pokemon.id}`}>
        <h2>EDIT</h2>
      </Link>
      <PokemonCardDetails pokemon={pokemon} types={types} />
    </>
  );
}

export default PokemonDetails;
