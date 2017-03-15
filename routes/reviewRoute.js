
///****REVIEWROUTE****//

const router = require('express').Router()
const knex = require('../db/knex')

//**********reviewRoute********//

function reviewRoute() {
  return knex('review');
}

//review POST//
router.post('/', function(req, res){
  reviewRoute().insert({
    body: req.body.body,
    rating: req.body.rating,
    created_at: req.body.created_at,
    recipe_id: req.body.recipe_id
    // email: req.body.email,
  }, ['body', 'rating', 'created_at', 'id']).then(function(result){
    res.json(result);
  });
});

//review GETALL//
router.get('/', function(req, res){
  reviewRoute().select().then(function(result){
    res.json(result);
  });
});

//review GET ONE//
router.get('/:id', function(req, res){
  reviewRoute().where('id', req.params.id).first().then(function(result){
    res.json(result);
  });
});

//review UPDATE//
router.put('/:id', function(req, res){
  reviewRoute().where('id', req.params.id).update({
    body: req.body.name,
    rating: req.body.rating
  }).then(function(result){
    res.json(result);
  });
});


//recipe DELETE//
router.delete('/:id', function(req, res){
  reviewRoute().where('id', req.params.id).del().then(function(result){
    res.json(result);
  });
});

module.exports = router
