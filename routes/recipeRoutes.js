const express = require('express');
const recipeController = require('../controllers/recipeController');
const router = express.Router();

router.get('/recipes', recipeController.recipe_get);
router.post('/recipes', recipeController.recipe_create_post);
router.get('/recipes/create', recipeController.recipe_create_get);
router.get('/recipes/:id', recipeController.recipe_details_get);
router.delete('/recipes/:id', recipeController.recipe_delete);

module.exports = router;