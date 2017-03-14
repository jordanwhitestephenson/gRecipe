
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {name: 'White Sugar'},
        {name: 'Milk'},
        {name: 'Eggs'},
        {name: 'Brown Sugar'},
        {name: 'Salt'},
        {name: 'Butter'},
        {name: 'Sour Cream'},
        {name: 'Sliced Almonds'},
        {name: 'Peanut Butter'},
        {name: 'Flour'},
        {name: 'Vanilla Extract'},
        {name: 'Oatmeal'}

      ]);
    });
};
