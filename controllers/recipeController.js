const Recipe = require('../models/recipe');
// recipe_get, recipe_details_get, recipe_create_get, recipe_create_post, recipe_delete

const recipe_get = (req, res) => {
  Recipe.find().sort({ createdAt: -1})
   .then((result) => {
     res.render('index', { title: 'Recipes', recipes: result});
   })
   .catch((err) => {
     console.log(err);
   })
}

const recipe_details_get = (req, res) => {
  const id = req.params.id;
  
  Recipe.findById(id)
   .then(result => {
    res.render('details', { title: 'Recipe details', recipe: result})
   })
   .catch(err => {
     res.status(404).render('404', { title: 'Recipe not found'})
   });
}

const recipe_create_get = (req, res) => {
  res.render('create', { title: 'Add new recipe'})
}

const recipe_create_post = (req, res) => {
  const recipe = new Recipe(req.body)

  recipe.save()
   .then(result => res.redirect('/'))
   .catch(err => console.log(err))
}

const recipe_delete = (req, res) => {
  const id = req.params.id;

  Recipe.findByIdAndDelete(id)
   .then(result => {
     res.json({ redirect: '/' })
   })
   .catch(err => console.log(err))
}

module.exports = {
  recipe_get,
  recipe_details_get,
  recipe_create_get,
  recipe_create_post,
  recipe_delete  
}