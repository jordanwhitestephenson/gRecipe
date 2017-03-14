//**REVIEWTABLE**//

exports.up = function(knex, Promise) {
  return knex.schema.createTable('review', function(table){
    table.increments();
    table.string('body', 5000);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('rating')
    table.integer('recipe_id')
    .references('id')
    .inTable('recipe')
    .onDelete('cascade');
    table.integer('user_id')
    .references('id')
    .inTable('user')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('review');
};
