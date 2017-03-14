const router = require('express').Router()
const knex = require('../db/knex')

//**********recipe_ingredientROUTE********//

function recipe_ingredientRoute() {
  return knex('recipe_ingredient');
}

//recipe_ingredient POST//
router.post('/', function(req, res){
  recipe_ingredientRoute().insert({
    quantity: req.body.quantity,
    unit: req.body.unit,
  }, 'id').then(function(result){
    res.json(result);
  });
});

//recipe_ingredient GETALL//
router.get('/', function(req, res){
  recipe_ingredientRoute().select().then(function(result){
    res.json(result);
  });
});

//recipe_ingredient GET ONE//
router.get('/:id', function(req, res){
  recipe_ingredientRoute().where('id', req.params.id).first().then(function(result){
    res.json(result);
  });
});

//recipe_ingredient UPDATE//
router.put('/:id', function(req, res){
  recipe_ingredientRoute().where('id', req.params.id).update({
    quantity: req.body.quantity,
    unit: req.body.unit,
  }).then(function(result){
    res.json(result);
  });
});


//recipe_ingredient DELETE//
router.delete('/:id', function(req, res){
  recipe_ingredientRoute().where('id', req.params.id).del().then(function(result){
    res.json(result);
  });
});

module.exports = router
