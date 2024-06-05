import { Form, useLoaderData } from "react-router-dom";

function PokemonEdit() {
  const loaderData = useLoaderData();
  const typePokemon = loaderData.pokemon.types.split(",")[0];
  return (
    <>
      <Form method="PUT">
        <h1>EDIT POKEMON</h1>
        <label htmlFor="name">Nom</label>{" "}
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={loaderData.pokemon.name}
        />
        <label htmlFor="name">Url</label>{" "}
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          defaultValue={loaderData.pokemon.image_url}
        />
        <label htmlFor="numberPokedex">Numero Pokedex</label>
        <input
          type="text"
          id="numberPokedex"
          name="numberPokedex"
          defaultValue={loaderData.pokemon.numero_pokedex}
        />
        <label htmlFor="type">Type</label>
        <select id="type" name="type">
          {loaderData.types.map((type) => (
            <option key={type.id} value={type.name}>
              {typePokemon}
            </option>
          ))}
        </select>
        <button type="submit">Modifier</button>
      </Form>

      <Form method="DELETE">
        <button type="submit">Supprimer</button>
      </Form>
    </>
  );
}

export default PokemonEdit;
