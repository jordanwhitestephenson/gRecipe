//RECIPE_INGREDIENT SEED//


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredient').insert([
        //Deep Fried PPJ//
        {quantity: '0.25', unit: 'cups',
        ingredient_id: knex('ingredient').where('name','Peanut Butter').select('id'),
        recipe_id: knex('recipe').where('title','Deep Fried PPJ').select('id')},

        {quantity: '1', unit: 'cup',
        ingredient_id: knex('ingredient').where('name','Flour').select('id'),
        recipe_id: knex('recipe').where('title','Deep Fried PPJ').select('id')},

        {quantity: '1', unit: 'teaspoon',
        ingredient_id: knex('ingredient').where('name','Vanilla Extract').select('id'),
        recipe_id: knex('recipe').where('title','Deep Fried PPJ').select('id')},

        {quantity: '0.25', unit: 'cup',
        ingredient_id: knex('ingredient').where('name','White Sugar').select('id'),
        recipe_id: knex('recipe').where('title','Deep Fried PPJ').select('id')},

        //Peanut Butter Cookies//
        {quantity: '1', unit: 'cup',
        ingredient_id: knex('ingredient').where('name','Peanut Butter').select('id'),
        recipe_id: knex('recipe').where('title','3 Ingredient Peanut Butter Cookies').select('id')},

        {quantity: '1', unit: 'cup',
        ingredient_id: knex('ingredient').where('name','White Sugar').select('id'),
        recipe_id: knex('recipe').where('title','3 Ingredient Peanut Butter Cookies').select('id')},

        {quantity: '3', unit: 'Large',
        ingredient_id: knex('ingredient').where('name', 'Eggs').select('id'),
        recipe_id: knex('recipe').where('title','3 Ingredient Peanut Butter Cookies').select('id')},

        //Almond Swirled Oatmeal//
        {quantity: '0.5', unit: 'cups',
        ingredient_id: knex('ingredient').where('name', 'Milk').select('id'),
        recipe_id: knex('recipe').where('title','Almond Swirled Oatmeal').select('id')},

        {quantity: '1', unit: 'tablespoon',
        ingredient_id: knex('ingredient').where('name', 'Peanut Butter').select('id'),
        recipe_id: knex('recipe').where('title','Almond Swirled Oatmeal').select('id')},

        {quantity: '0.25', unit: 'tablespoon',
        ingredient_id: knex('ingredient').where('name', 'Sliced Almonds').select('id'),
        recipe_id: knex('recipe').where('title','Almond Swirled Oatmeal').select('id')},

        {quantity: '2', unit: 'ounces',
        ingredient_id: knex('ingredient').where('name', 'Oatmeal').select('id'),
        recipe_id: knex('recipe').where('title','Almond Swirled Oatmeal').select('id')},


        //Egg Custard//
        {quantity: '2', unit: 'cups',
        ingredient_id: knex('ingredient').where('name', 'Milk').select('id'),
        recipe_id: knex('recipe').where('title','Egg Custard').select('id')},

        {quantity: '2', unit: 'large',
        ingredient_id: knex('ingredient').where('name', 'Eggs').select('id'),
        recipe_id: knex('recipe').where('title','Egg Custard').select('id')},

        {quantity: '1', unit: 'dash',
        ingredient_id: knex('ingredient').where('name', 'Vanilla Extract').select('id'),
        recipe_id: knex('recipe').where('title','Egg Custard').select('id')},

        {quantity: '1', unit: 'pinch',
        ingredient_id: knex('ingredient').where('name', 'Salt').select('id'),
        recipe_id: knex('recipe').where('title','Egg Custard').select('id')}




      ]);
    });
};
