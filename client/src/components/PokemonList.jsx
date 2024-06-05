import { Link, useLoaderData } from "react-router-dom";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const pokemons = useLoaderData();
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <Link to={`/${pokemon.id}`}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;
