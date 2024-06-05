const AbstractRepository = require("./AbstractRepository");

class PokemonTypeRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "pokemon_type" });
  }

  // The C of CRUD - Create operation

  async create(pokemonId, typeId) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (pokemon_id, type_id) values (?, ?)`,
      [pokemonId, typeId]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async delete(id) {
    // Execute the SQL DELETE query to delete a specific program
    const [result] = await this.database.query(
      `delete from ${this.table} where pokemon_id = ?`,
      [id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = PokemonTypeRepository;
