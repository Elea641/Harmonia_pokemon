// Import required dependencies
const { app, request, database } = require("../config");
const pokemonActions = require("../../app/controllers/pokemonActions");

describe("GET /api/pokemons", () => {
  test("you declared and exported a browse function from pokemonActions.js", async () => {
    expect(typeof pokemonActions.browse).toBe("function");
  });
  test("your browse function has 3 parameters: req, res and next", async () => {
    expect(pokemonActions.browse).toHaveLength(3);
  });
  test("should fetch items successfully", async () => {
    const rows = [];

    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    const response = await request(app).get("/api/pokemons");

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(rows);
  });
});
