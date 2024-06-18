const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/pokemonActions");

const validatePokemon = require("../../../middlewares/validatePokemon");
const nameValidatePokemon = require("../../../middlewares/nameValidatePokemon");

// Route to get a list of items
router.get("", browse);

// Route to get a specific item by ID
router.get("/:id", read);

router.put("/:id", nameValidatePokemon, validatePokemon, edit);

// Route to add a new item
router.post("", nameValidatePokemon, validatePokemon, add);

router.delete("/:id", destroy);

// router.use(nameValidatePokemon, validatePokemon);

// router.put("/:id", edit);

// // Route to add a new item
// router.post("", add);

/* ************************************************************************* */

module.exports = router;
