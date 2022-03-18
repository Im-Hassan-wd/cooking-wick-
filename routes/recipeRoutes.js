const express = require('express');
const recipeContoller = require('../controllers/recipeController');
const router = express.Router();

router.get('/recipes', recipeContoller.recipe_get);

router.post('/recipes', (req, res) => {
  const recipe = new Recipe(req.body)

  recipe.save()
   .then(result => res.redirect('/'))
   .catch(err => console.log(err))
});

router.get('/recipes/create', (req, res) => res.render('create', { title: 'Add new recipe'}));

router.get('/recipes/:id', (req, res) => {
  const id = req.params.id;
  
  Recipe.findById(id)
   .then(result => {
    res.render('details', { title: 'Recipe details', recipe: result})
   })
   .catch(err => console.log(err));
});

router.delete('/recipes/:id', (req, res) => {
  const id = req.params.id;

  Recipe.findByIdAndDelete(id)
   .then(result => {
     res.json({ redirect: '/' })
   })
   .catch(err => console.log(err))
});

module.exports = router;