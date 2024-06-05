import PropTypes from "prop-types";

function PokemonCardDetails({ pokemon, types }) {
  return (
    <>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image_url} alt={pokemon.name} />
      {types.map((type) => (
        <p key={type.name} value={type.name}>
          {type}
        </p>
      ))}
    </>
  );
}

PokemonCardDetails.propTypes = {
  pokemon: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  types: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default PokemonCardDetails;
