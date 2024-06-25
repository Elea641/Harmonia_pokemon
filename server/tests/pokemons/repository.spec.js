// Import required dependencies
const { database, tables } = require("../config");

// Import repository classes
const AbstractRepository = require("../../database/models/AbstractRepository");
const PokemonRepository = require("../../database/models/PokemonRepository");

describe("PokemonRepository", () => {
  test("PokemonRepository extends AbstractRepository", async () => {
    expect(Object.getPrototypeOf(PokemonRepository)).toBe(AbstractRepository);
  });

  test("tables.pokemon = new PokemonRepository", async () => {
    expect(tables.pokemon instanceof PokemonRepository).toBe(true);
  });

  test("readAll => select", async () => {
    const rows = [];

    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    const returned = await tables.pokemon.readAll();

    expect(database.query).toHaveBeenCalledWith("select * from pokemon");
    expect(returned).toStrictEqual(rows);
  });

  test("read => select with id", async () => {
    const rows = [{}];

    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    const returned = await tables.pokemon.read(0);

    expect(database.query).toHaveBeenCalledWith(
      "select * from pokemon where id = ?",
      [0]
    );
    expect(returned).toStrictEqual(rows[0]);
  });
});
