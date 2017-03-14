//USER TABLE//


exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
    table.increments();
    table.string('name');
    table.string('email').unique()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
