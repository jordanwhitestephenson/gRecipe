const router = require('express').Router()
const knex = require('../db/knex')

//**********recipeROUTE********//

function recipeRoute() {
  return knex('recipe');
}

//recipe POST//
router.post('/', function(req, res){
  recipeRoute().insert({
    title: req.body.title,
    body: req.body.body,
    image: req.body.image
    // email: req.body.email,
  }, ['title', 'body', 'image'] ).then(function(result){
    res.json(result);
  });
});

//recipe GETALL//
router.get('/', function(req, res){
  recipeRoute().select().then(function(result){
    res.json(result);
  });
});

//recipe GET ONE//
router.get('/:id', function(req, res){
  recipeRoute().where('id', req.params.id).first().then(function(result){
    res.json(result);
  });
});

//recipe UPDATE//
router.put('/:id', function(req, res){
  recipeRoute().where('id', req.params.id).update({
    title: req.body.name,
    body: req.body.body,
    image: req.body.image
  }).then(function(result){
    res.json(result);
  });
});


//recipe DELETE//
router.delete('/:id', function(req, res){
  recipeRoute().where('id', req.params.id).del().then(function(result){
    res.json(result)
    console.log('DELETE SUCCES')
  })
  });
});

module.exports = router
