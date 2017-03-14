const router = require('express').Router()
const knex = require('../db/knex')

//**********userROUTE********//

function userRoute() {
  return knex('user');
}

//user POST//
router.post('/', function(req, res){
  userRoute().insert({
    // name: req.body.name,
    // email: req.body.email,
  }, 'id').then(function(result){
    res.json(result);
  });
});

//user GETALL//
router.get('/', function(req, res){
  userRoute().select().then(function(result){
    res.json(result);
  });
});

//user GET ONE//
router.get('/:id', function(req, res){
  userRoute().where('id', req.params.id).first().then(function(result){
    res.json(result);
  });
});

//user UPDATE//
router.put('/:id', function(req, res){
  userRoute().where('id', req.params.id).update({
    stars: req.body.stars
  }).then(function(result){
    res.json(result);
  });
});


//user DELETE//
router.delete('/:id', function(req, res){
  userRoute().where('id', req.params.id).del().then(function(result){
    res.json(result);
  });
});

module.exports = router
