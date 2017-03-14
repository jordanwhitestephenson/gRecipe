///USER SEED///


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {name: 'Mr. FluffyFace', email: 'jordanwhitestehenson@gmail.com'},
        {name: 'Sir Rumple III', email: 'rumplebuttom@aol.com'},
        {name: 'La Dash A Shing', email: 'superpinkfrog@aol.com'},
        {name: 'Jimmy Sandwich', email: 'sandwichesRmyThing.yahoo.com'}
      ]);
    });
};
