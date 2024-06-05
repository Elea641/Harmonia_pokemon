import { Link, useLoaderData } from "react-router-dom";
import PokemonCardList from "../components/PokemonCardList";

function PokemonList() {
  const pokemons = useLoaderData();

  pokemons.sort((a, b) => a.numero_pokedex - b.numero_pokedex);

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
