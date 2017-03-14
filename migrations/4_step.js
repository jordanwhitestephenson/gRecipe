//**STEP TABLE**//


exports.up = function(knex, Promise) {
  return knex.schema.createTable('step', function(table){
    table.increments();
    table.string('body', 5000);
    table.integer('stepNumber');
    table.integer('recipe_id')
    .references('id')
    .inTable('recipe')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('step');
};
