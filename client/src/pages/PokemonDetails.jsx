import { Link, useLoaderData } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

function PokemonDetails() {
  const pokemon = useLoaderData();
  return (
    <section>
      <PokemonCard pokemon={pokemon} />
      <Link to={`/pokemon/edition/${pokemon.id}`}>
        <h2>EDIT</h2>
      </Link>
    </section>
  );
}

export default PokemonDetails;
