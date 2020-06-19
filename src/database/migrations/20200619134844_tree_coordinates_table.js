
exports.up = function(knex) {
    return knex.schema.createTable('tree_coordinates', function(table) {
        table.string('id').primary();
        table.string('lat').notNullable();
        table.string('lng').notNullable(); 
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tree_coordinates');
};
