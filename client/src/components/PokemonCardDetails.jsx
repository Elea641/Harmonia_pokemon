import PropTypes from "prop-types";

function PokemonCardDetails({ pokemon }) {
  return (
    <section>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image_url} alt={pokemon.name} />
      <ul>
        {pokemon.types &&
          pokemon.types.map((type) => <li key={type.id}>{type.name}</li>)}
      </ul>
    </section>
  );
}

PokemonCardDetails.propTypes = {
  pokemon: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default PokemonCardDetails;
