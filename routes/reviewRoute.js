
///****REVIEWROUTE****//

const router = require('express').Router()
const knex = require('../db/knex')

//**********reviewRoute********//

function reviewRoute() {
  return knex('review');
}

//recipe POST//
router.post('/', function(req, res){
  reviewRoute().insert({
    // name: req.body.name,
    // email: req.body.email,
  }, 'id').then(function(result){
    res.json(result);
  });
});

//recipe GETALL//
router.get('/', function(req, res){
  reviewRoute().select().then(function(result){
    res.json(result);
  });
});

//recipe GET ONE//
router.get('/:id', function(req, res){
  reviewRoute().where('id', req.params.id).first().then(function(result){
    res.json(result);
  });
});

//recipe UPDATE//
router.put('/:id', function(req, res){
  reviewRoute().where('id', req.params.id).update({
    stars: req.body.stars
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
