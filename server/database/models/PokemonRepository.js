const AbstractRepository = require("./AbstractRepository");

class PokemonRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "pokemon" });
  }

  // The C of CRUD - Create operation

  async create(pokemon) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, image_url, numero_pokedex) values (?, ?, ? )`,
      [pokemon.name, pokemon.imageUrl, parseInt(pokemon.numberPokedex, 10)]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    const query = `
      SELECT 
        p.id, 
        p.name, 
        p.image_url, 
        p.numero_pokedex, 
        t.id AS type_id, 
        t.name AS type_name
      FROM 
        ${this.table} p
      LEFT JOIN 
        pokemon_type pt ON p.id = pt.pokemon_id
      LEFT JOIN 
        type t ON t.id = pt.type_id
      WHERE 
        p.id = ?;
    `;
    const [rows] = await this.database.query(query, [id]);

    if (rows.length === 0) return null;

    const pokemon = {
      id: rows[0].id,
      name: rows[0].name,
      image_url: rows[0].image_url,
      numero_pokedex: rows[0].numero_pokedex,
      types: rows.map((row) => ({ id: row.type_id, name: row.type_name })),
    };

    return pokemon;
  }

  async readAll() {
    const query = `
      SELECT 
        p.id, 
        p.name, 
        p.image_url, 
        p.numero_pokedex, 
        t.id AS type_id, 
        t.name AS type_name
      FROM 
        pokemon p
      LEFT JOIN 
        pokemon_type pt ON p.id = pt.pokemon_id
      LEFT JOIN 
        type t ON t.id = pt.type_id;
    `;
    const [rows] = await this.database.query(query);

    const pokemons = [];
    const pokemonMap = new Map();

    rows.forEach((row) => {
      if (!pokemonMap.has(row.id)) {
        const pokemon = {
          id: row.id,
          name: row.name,
          image_url: row.image_url,
          numero_pokedex: row.numero_pokedex,
          types: [],
        };
        pokemonMap.set(row.id, pokemon);
        pokemons.push(pokemon);
      }
      const pokemon = pokemonMap.get(row.id);
      if (row.type_id && row.type_name) {
        pokemon.types.push({ id: row.type_id, name: row.type_name });
      }
    });

    return pokemons;
  }

  async update(pokemon, id) {
    // Execute the SQL UPDATE query to update a specific program
    const [result] = await this.database.query(
      `update ${this.table} set name = ?, image_url = ? where id = ?`,
      [pokemon.name, pokemon.imageUrl, id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    // Execute the SQL DELETE query to delete a specific program
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = PokemonRepository;
