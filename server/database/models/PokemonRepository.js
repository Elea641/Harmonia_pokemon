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
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
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
