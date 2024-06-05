import { useLoaderData } from "react-router-dom";
import PokemonForm from "../components/PokemonForm";

function PokemonDetails() {
  const types = useLoaderData();
  return <PokemonForm types={types} />;
}

export default PokemonDetails;
