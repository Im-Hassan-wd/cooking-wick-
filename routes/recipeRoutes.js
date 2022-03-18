const express = require('express');
const { recipe_get, recipe_create_post, recipe_create_get, recipe_details_get, recipe_delete} = require('../controllers/recipeController');
const router = express.Router();

router.get('/recipes', recipe_get);
router.post('/recipes', recipe_create_post);
router.get('/recipes/create', recipe_create_get);
router.get('/recipes/:id', recipe_details_get);
router.delete('/recipes/:id', recipe_delete);

module.exports = router;