const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute')
const ingredientRoute = require('./routes/ingredientRoute')
const recipeRoute = require('./routes/recipeRoute')
const stepRoute = require('./routes/stepRoute')
const recipe_ingredientRoute = require('./routes/recipe_ingredientRoute')
const reviewRoute = require('./routes/reviewRoute')

var cors = require('cors')
app.use(cors())


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/userRoute', userRoute)
app.use('/ingredientRoute', ingredientRoute)
app.use('/recipeRoute', recipeRoute)
app.use('/stepRoute', stepRoute)
app.use('/recipe_ingredientRoute', recipe_ingredientRoute)
app.use('/reviewRoute', reviewRoute)



app.use(express.static('public'));

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

module.exports = userRoute, ingredientRoute, recipeRoute, recipe_ingredientRoute, cors;
