import PropTypes from "prop-types";

function PokemonCardList({ pokemon }) {
  return (
    <article>
      <img
        draggable="false"
        src={pokemon.image_url}
        alt="affiche d'un pokémon"
      />
      <h2>
        N° {pokemon.numero_pokedex} {pokemon.name}
      </h2>
    </article>
  );
}

PokemonCardList.propTypes = {
  pokemon: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
    numero_pokedex: PropTypes.number,
  }).isRequired,
};

export default PokemonCardList;
