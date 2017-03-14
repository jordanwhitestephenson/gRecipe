//RECIPE SEED//


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {title: 'Deep Fried PPJ', body: 'Deep-fried peanut butter and jelly sandwiches. Yes, it’s a thing. And the recipe below shows you how to make it. As the authors say, “although this would be insane trade bait in the lunchroom, it’s best to eat these deep-fried wonders right out of the fryer.” To us, the deep-fried rendition of a childhood classic is damn good straight up without the white chocolate ganache for dipping. I mean, whatever happened to purity of purpose? To simple pleasures? To it being midnight and you gotta cut some corners? But if you feel the need to embellish, it’s also damn good with a shmear of the sweet stuff.', image: 'http://17374-presscdn-0-15.pagely.netdna-cdn.com/wp-content/uploads/2014/02/deep-fried-peanut-butter-jelly-sandwich-recipe.jpg',
        user_id: knex('user').where('email','jordanwhitestehenson@gmail.com').select('id')},

        {title: '3 Ingredient Peanut Butter Cookies', body: 'This recipe has just 3 ingredients. It/s fast, easy and the cookies are wonderful! It/s great for kids that are just learning to bake.', image: 'http://images.media-allrecipes.com/userphotos/250x250/61039.jpg',
        user_id: knex('user').where('email','sandwichesRmyThing.yahoo.com').select('id')},


        {title: 'Almond Swirled Oatmeal', body: 'ALMOND ALMOND ALMONDS ALMONDS ALSMOND!!', image: 'http://static.smuckersrms.com/PhotoImage.ashx?recipeid=7390&w=600&h=600.jpg',
        user_id: knex('user').where('email','superpinkfrog@aol.com').select('id')},

        {title: 'Egg Custard', body: 'This classic dessert remains a standout for its sophisticated yet mild flavor and its creamy texture. Ideally sized for a kids snack but worldly enough for a dinner party, it takes just 15 minutes of prep time and can be stored in the refrigerator, covered, for up to 3 days. It/s even better the afternoon after you/ve made it.', image: 'http://assets.epicurious.com/photos/560d99fa7b55306961bf7791/6:4/w_620%2Ch_413/239229_hires.jpg',
        user_id: knex('user').where('email','rumplebuttom@aol.com').select('id')},

      ]);
    });
};
