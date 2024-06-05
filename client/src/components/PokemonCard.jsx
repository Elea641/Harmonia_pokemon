import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <article>
      <img
        draggable="false"
        src={pokemon.image_url}
        alt="affiche d'un pokémon"
      />
      <h2>{pokemon.name}</h2>
    </article>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
