import { Form } from "react-router-dom";
import PropTypes from "prop-types";

function PokemonForm({ types }) {
  return (
    <Form method="POST">
      <h1>ADD POKEMON</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="imageUrl">Url</label>
      <input type="text" id="imageUrl" name="imageUrl" />
      <label htmlFor="numberPokedex">Numero Pokedex</label>
      <input type="text" id="numberPokedex" name="numberPokedex" />
      <label htmlFor="type">Type</label>
      <select id="type" name="type">
        {types &&
          types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
      </select>
      <button type="submit">Ajouter</button>
    </Form>
  );
}

PokemonForm.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PokemonForm;
