const express = require('express');
const recipeController = require('../controllers/recipeController');
const router = express.Router();

router.get('/recipes', recipeController.recipe_get);

router.post('/recipes', recipeController.recipe_create_post);

router.get('/recipes/create', recipeController.recipe_create_get);

router.get('/recipes/:id', recipeController.recipe_details_get);

router.delete('/recipes/:id', (req, res) => {
  const id = req.params.id;

  Recipe.findByIdAndDelete(id)
   .then(result => {
     res.json({ redirect: '/' })
   })
   .catch(err => console.log(err))
});

module.exports = router;