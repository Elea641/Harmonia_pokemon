import { Form } from "react-router-dom";

function PokemonForm() {
  return (
    <Form method="POST">
      <h1>ADD POKEMON</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="imageUrl">Url</label>
      <input type="text" id="imageUrl" name="imageUrl" />
      <button type="submit">Ajouter</button>
    </Form>
  );
}

export default PokemonForm;
