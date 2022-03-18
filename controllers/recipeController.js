const Recipe = require('../models/recipe');
// recipe_get, recipe_details_get, recipe_create_get, recipe_create_post, recipe_delete

const recipe_get = (req, res) => {
  Recipe.find().sort({ createdAt: -1})
   .then((result) => {
     res.render('index', { title: 'Recipes', recipes: result});
   })
   .catch((err) => {
     res.render('error');
   })
}

const recipe_details_get = (req, res) => {
  const id = req.params.id;
  
  Recipe.findById(id)
   .then(result => {
    res.render('details', { title: 'Recipe details', recipe: result})
   })
   .catch(err => console.log(err));
}

const recipe_create_get = (req, res) => {
  res.render('create', { title: 'Add new recipe'})
}

module.exports = {
  recipe_get,
  recipe_details_get,
  recipe_create_get  
}