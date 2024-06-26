// Import required dependencies
const { app, request } = require("../config");
const pokemonActions = require("../../app/controllers/pokemonActions");

describe("GET /api/pokemons", () => {
  test("you declared and exported a browse function from pokemonActions.js", async () => {
    expect(typeof pokemonActions.browse).toBe("function");
  });
  test("your browse function has 3 parameters: req, res and next", async () => {
    expect(pokemonActions.browse).toHaveLength(3);
  });
});

describe("GET /api/pokemons", () => {
  it("responds with json", (done) => {
    request(app)
      .get("/api/pokemons")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        console.warn("Response in describe block:", res.body);
        return done();
      });
  });
});
