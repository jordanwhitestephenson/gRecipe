
//**RECIPE TABLE**///

exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', function(table){
    table.increments();
    table.string('title');
    table.string('body', 5000);
    table.string('image');
    table.integer('user_id')
    .references('id')
    .inTable('user')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe');
};
