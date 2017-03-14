//RECIPE_INGREDIENT JOIN TABLE///

exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredient', function(table){
    table.increments();
    table.decimal('quantity')
    table.string('unit');
    table.integer('ingredient_id')
    .references('id')
    .inTable('ingredient')
    .onDelete('cascade');
    table.integer('recipe_id')
    .references('id')
    .inTable('recipe')
    .onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe_ingredient');
};
