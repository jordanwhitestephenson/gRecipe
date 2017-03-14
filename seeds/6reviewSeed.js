//**REVIEWSEED**//

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('review').del()
    .then(function () {
      // Inserts seed entries
      return knex('review').insert([

        {body: 'Burnt myself when I deep friend my PBJ. You guys didn/t tell me that I needed eye protection', rating: '2',
        recipe_id: knex('recipe').where('title','Deep Fried PPJ').select('id'),
        user_id: knex('user').where('email','jordanwhitestehenson@gmail.com').select('id')},

        {body: 'Lil Wayne should write a song about how good these Peanut Butter Cookies ARE!!!', rating: '4',
        recipe_id: knex('recipe').where('title','3 Ingredient Peanut Butter Cookies').select('id'),
        user_id: knex('user').where('email','rumplebuttom@aol.com').select('id')},

        {body: 'Almond SWIRL got me SWIRLIN man!', rating: '5',
        recipe_id: knex('recipe').where('title','Almond Swirled Oatmeal').select('id'),
        user_id: knex('user').where('email','sandwichesRmyThing.yahoo.com').select('id')},

        {body: 'Eggs, get your eggs here!Fresh and white eggs are here!!!Wiggle jiggle, yellow middle,thats the best of what you are. White and tender, surrond the center,cozy sitting in a crackling shell.', rating: '5',
        recipe_id: knex('recipe').where('title','Egg Custard').select('id'),
        user_id: knex('user').where('email','sandwichesRmyThing.yahoo.com').select('id')},







      ]);
    });
};
