const router = require('express').Router()
const knex = require('../db/knex')

//**********stepROUTE********//

function stepRoute() {
  return knex('step');
}

//step POST//
router.post('/', function(req, res){
  stepRoute().insert({
      body: req.body.body,
      stepNumber: req.body.stepNumber
    // email: req.body.email,
  }, 'id').then(function(result){
    res.json(result);
  });
});

//step GETALL//
router.get('/', function(req, res){
  stepRoute().select().then(function(result){
    res.json(result);
  });
});

//step GET ONE//
router.get('/:id', function(req, res){
  stepRoute().where('id', req.params.id).first().then(function(result){
    res.json(result);
  });
});

//step UPDATE//
router.put('/:id', function(req, res){
  stepRoute().where('id', req.params.id).update({
    body: req.body.body,
    stepNumber: req.body.stepNumber
  }).then(function(result){
    res.json(result);
  });
});


//step DELETE//
router.delete('/:id', function(req, res){
  stepRoute().where('id', req.params.id).del().then(function(result){
    res.json(result);
  });
});

module.exports = router
