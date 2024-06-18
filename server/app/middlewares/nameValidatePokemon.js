const nameValidatePokemon = (req, res, next) => {
  if (req.body.name.length < 2) {
    res.sendStatus(401);
  } else {
    next();
  }
};

module.exports = nameValidatePokemon;
