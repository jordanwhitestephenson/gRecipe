const router = require('express').Router()
const knex = require('../db/knex')

//**********ingredientROUTE********//

function ingredientRoute() {
  return knex('ingredient');
}

//INGREDIENT POST//
router.post('/', function(req, res){
  ingredientRoute().insert({
    name: req.body.name
  }, 'id').then(function(result){
    res.json(result);
  });
});

//INGREDIENT GETALL//
router.get('/', function(req, res){
  ingredientRoute().select().then(function(result){
    res.json(result);
  });
});

//ingredient GET ONE//
router.get('/:id', function(req, res){
  ingredientRoute().where('id', req.params.id).first().then(function(result){
    res.json(result);
  });
});

//ingredient UPDATE//
router.put('/:id', function(req, res){
  ingredientRoute().where('id', req.params.id).update({
    name: req.body.name
  }).then(function(result){
    res.json(result);
  });
});


//ingredient DELETE//
router.delete('/:id', function(req, res){
  ingredientRoute().where('id', req.params.id).del().then(function(result){
    res.json(result);
  });
});

module.exports = router
