import { Form } from "react-router-dom";

function PokemonForm() {
  return (
    <Form method="POST">
      <label htmlFor="name">Create Pokemon</label>{" "}
      <input type="text" id="name" name="name" />
      <input type="text" id="imageUrl" name="imageUrl" />
      <button type="submit">Ajouter</button>
    </Form>
  );
}

export default PokemonForm;
