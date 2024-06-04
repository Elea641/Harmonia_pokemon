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
      `insert into ${this.table} (name, image_url) values (?, ?)`,
      [pokemon.name, pokemon.imageUrl]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT 
      p.id, 
      p.name, 
      p.image_url, 
      p.numero_pokedex, 
      GROUP_CONCAT(t.name SEPARATOR ', ') AS types
  FROM 
      ${this.table} p
  JOIN 
      pokemon_type pt ON p.id = pt.pokemon_id
  JOIN 
      type t ON t.id = pt.type_id
  WHERE 
      p.id = ?
  GROUP BY 
      p.id, 
      p.name, 
      p.image_url, 
      p.numero_pokedex;
  `,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Pokémon with their associated types
    const query = `
          SELECT 
              p.id, 
              p.name, 
              p.image_url, 
              p.numero_pokedex, 
              GROUP_CONCAT(t.name SEPARATOR ', ') AS types
          FROM 
              pokemon p
          JOIN 
              pokemon_type pt ON p.id = pt.pokemon_id
          JOIN 
              type t ON t.id = pt.type_id
          GROUP BY 
              p.id, 
              p.name, 
              p.image_url, 
              p.numero_pokedex;
      `;

    // Execute the query
    const [rows] = await this.database.query(query);

    // Return the array of Pokémon with their types
    return rows;
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
