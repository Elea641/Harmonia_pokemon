// Import required dependencies
const { app, request, database } = require("../config");

describe("GET /api/pokemons", () => {
  it("should fetch pokemons successfully", async () => {
    const rows = [];

    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    const response = await request(app).get("/api/pokemons");

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(rows);
  });
});
