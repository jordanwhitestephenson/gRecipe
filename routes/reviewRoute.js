
///****REVIEWROUTE****//

const router = require('express').Router();
const knex = require('../db/knex');

//**********reviewRoute********//

function reviewRoute() {
  return knex('review');
}
function userRoute() {
  return knex('user');
}


//review POST//
router.post('/', function(req, res){

  userRoute().insert({
    email: req.body.email
  }, ['email','id']).then(function(result){

    reviewRoute().insert({
      body: req.body.body,
      rating: req.body.rating,
      created_at: req.body.created_at,
      recipe_id: req.body.recipe_id,
      // email: req.body.email,
      user_id: knex('user').where('email', req.body.email).select('id')
      // email: req.body.email,
    }, ['body', 'rating', 'created_at', 'id', 'recipe_id', 'user_id']).then(function(result){
      res.json(result)
      console.log('POST SUCESS')
    }).catch('POST UNSUCESSFUL')
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

module.exports = router;
