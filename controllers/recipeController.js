const Recipe = require('../models/recipe');
// recipe_get, recipe_details, recipe_create_get, recipe_create_post, recipe_delete

const recipe_get = (req, res) => {
  Recipe.find().sort({ createdAt: -1})
   .then((result) => {
     res.render('index', { title: 'Recipes', recipes: result});
   })
   .catch((err) => {
     res.render('error');
   })
}