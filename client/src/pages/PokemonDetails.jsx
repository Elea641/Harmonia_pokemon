import { Link, useLoaderData } from "react-router-dom";
import PokemonCardDetails from "../components/PokemonCardDetails";

function PokemonDetails() {
  const pokemon = useLoaderData();
  return (
    <>
      <Link to={`/pokemon/edition/${pokemon.id}`}>
        <h2>EDIT</h2>
      </Link>
      <PokemonCardDetails pokemon={pokemon} />
    </>
  );
}

export default PokemonDetails;
