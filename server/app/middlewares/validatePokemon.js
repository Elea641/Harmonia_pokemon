const Joi = require("joi");

const pokemonSchema = Joi.object({
  name: Joi.string().max(255).required(),
  image_url: Joi.string().max(255).required(),
});

const validatePokemon = (req, res, next) => {
  const { error } = pokemonSchema.validate(req.body, { abortEarly: false });

  if (error == null) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};

module.exports = validatePokemon;
