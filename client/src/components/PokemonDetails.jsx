import { useLoaderData } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import PokemonEdit from "./PokemonEdit";

function PokemonDetails() {
  const pokemon = useLoaderData();
  return (
    <>
      <PokemonCard pokemon={pokemon} />
      <PokemonEdit />
    </>
  );
}

export default PokemonDetails;
