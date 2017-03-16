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

router.post('/', function(req, res) {

var userID;
userRoute().where('email', req.body.email).select('id').then(result => {
  userID=result[0].id;
  console.log(userID);
  reviewRoute().insert({
    body: req.body.body,
    rating: req.body.rating,
    created_at: req.body.created_at,
    recipe_id: req.body.recipe_id,
    user_id: knex('user').where('email', req.body.email).select('id')
  }, ['body', 'rating', 'created_at', 'recipe_id', 'user_id'])
  .then(function(result){
    res.json(result);
  });
}).catch(result => {
        userRoute().insert({
            email: req.body.email
        }, 'email', 'id').then(result => {
            reviewRoute().insert({
                body: req.body.body,
                rating: req.body.rating,
                created_at: req.body.created_at,
                recipe_id: req.body.recipe_id,
                user_id: knex('user').where('email', req.body.email).select('id')
            }, ['body', 'rating', 'created_at', 'id', 'recipe_id', 'user_id']).then(function(result) {
                res.json(result);
            });
        });
    }); //<--closing catch statement
}); //<---closing put statment//

//review GETALL//
router.get('/', function(req, res) {
    reviewRoute().join('user', 'user.id' , '=','review.user_id' .select().select().then(function(result) {
        res.json(result);
    });
});

//review GET ONE//
router.get('/:id', function(req, res) {
    reviewRoute().where('id', req.params.id).first().then(function(result) {
        res.json(result);
    });
});

//review UPDATE//
router.put('/:id', function(req, res) {
    reviewRoute().where('id', req.params.id).update({
        body: req.body.body,
        rating: req.body.rating
    }).then(function(result) {
        res.json(result);
    });
});


//recipe DELETE//
router.delete('/:id', function(req, res) {
    reviewRoute().where('id', req.params.id).del().then(function(result) {
        res.json(result);
    });
});

module.exports = router;
