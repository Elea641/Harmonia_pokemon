import { Link, useLoaderData } from "react-router-dom";
import PokemonCardList from "./PokemonCardList";

function PokemonList() {
  const pokemons = useLoaderData();
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <Link to={`/${pokemon.id}`}>
            <PokemonCardList pokemon={pokemon} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;
