//STEP SEED//

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('step').del()
    .then(function () {
      // Inserts seed entries
      return knex('step').insert([
        //DEEP FRIED//
        {stepNumber: '1', body: 'Place the white chocolate in a heatproof bowl and nest the bowl in a saucepan over but not touching simmering water. (Alternatively, put the chocolate in the top pan of a double boiler and place over the lower pan filled with simmering water.) Heat the chocolate until melted, occasionally stirring gently with a spatula to help the melting along. (Be careful not to let so much as a single drop of water get in the chocolate or it may seize.',
        recipe_id: knex('recipe').where('title','Deep Fried PPJ').select('id')},

        {stepNumber: '2', body: 'When the chocolate has fully melted, reduce the heat to low. Switch to a whisk and slowly add the cream, whisking constantly until fully incorporated. Remove the pan from the heat and scrape the ganache into a heatproof bowl. Cover with aluminum foil to keep warm.',
        recipe_id: knex('recipe').where('title','Deep Fried PPJ').select('id')},

        {stepNumber: '3', body: 'Pour enough oil in a deep pot or deep-fryer to measure about 3 inches. Heat the oil to 325°F',
        recipe_id: knex('recipe').where('title','Deep Fried PPJ').select('id')},

        {stepNumber: '4', body: 'Pour enough oil in a deep pot or deep-fryer to measure about 3 inches. Heat the oil to 325°F',
        recipe_id: knex('recipe').where('title','Deep Fried PPJ').select('id')},

        {stepNumber: '5', body: 'Serve the warm sandwiches with the white chocolate ganache, if using, on the side for dipping',
        recipe_id: knex('recipe').where('title','Deep Fried PPJ').select('id')},

//3 Ingredient Peanut Butter Cookies//
        {stepNumber: '1', body: 'Preheat oven to 350 degrees F (175 degrees C). Line baking sheets with parchment paper.',
        recipe_id: knex('recipe').where('title','3 Ingredient Peanut Butter Cookies').select('id')},

        {stepNumber: '2', body: 'Combine the peanut butter, white sugar and egg. Mix until smooth',
        recipe_id: knex('recipe').where('title','3 Ingredient Peanut Butter Cookies').select('id')},

        {stepNumber: '3', body: 'Drop spoonfuls of dough onto the prepared baking sheet. Bake at 350 degrees F (175 degrees C) for 6 to 8 minutes. Do not overbake!',
        recipe_id: knex('recipe').where('title','3 Ingredient Peanut Butter Cookies').select('id')},

        //Almond Swirled Oatmeal//
        {stepNumber: '1', body: 'PREPARE oatmeal according to package directions using almond milk.',
        recipe_id: knex('recipe').where('title','Almond Swirled Oatmeal').select('id')},

        {stepNumber: '2', body: 'PLACE almond butter into corner of resealable plastic bag. Microwave on HIGH 5 to 8 seconds. Cut small corner off bag. Drizzle over oatmeal in spiral pattern. Sprinkle with almonds and cinnamon.',
        recipe_id: knex('recipe').where('title','Almond Swirled Oatmeal').select('id')},

        {stepNumber: '3', body: 'To Toast Almonds: Place nuts in dry nonstick skillet. Cook over medium heat, shaking pan until nuts are lightly browned. Remove from pan immediately to avoid over-browning.',
        recipe_id: knex('recipe').where('title','Almond Swirled Oatmeal').select('id')},

        //Egg Custard//
        {stepNumber: '1', body: 'Preheat oven to 325 degrees F (165 degrees C).',
        recipe_id: knex('recipe').where('title','Egg Custard').select('id')},

        {stepNumber: '2', body: 'Whisk milk, eggs, sugar, salt, and vanilla together in a bowl until completely combined. Pour egg mixture into 6 custard cups; sprinkle tops with nutmeg',
        recipe_id: knex('recipe').where('title','Egg Custard').select('id')},

        {stepNumber: '3', body: 'Bake in the preheated oven until custards are set, about 1 hour. Cool completely.',
        recipe_id: knex('recipe').where('title','Egg Custard').select('id')},


      ]);
    });
};
