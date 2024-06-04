import { Form, useLoaderData } from "react-router-dom";

function PokemonEdit() {
  const loaderData = useLoaderData();

  return (
    <>
      <Form method="PUT">
        <label htmlFor="name">Nom</label>{" "}
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={loaderData.name}
        />
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          defaultValue={loaderData.image_url}
        />
        <button type="submit">Modifier</button>
      </Form>

      <Form method="DELETE">
        <button type="submit">Supprimer</button>
      </Form>
    </>
  );
}

export default PokemonEdit;
