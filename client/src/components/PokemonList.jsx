import { Link, useLoaderData } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import PokemonForm from "./PokemonForm";

function PokemonList() {
  const pokemons = useLoaderData();
  return (
    <>
      <PokemonForm />
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/${pokemon.id}`}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PokemonList;
