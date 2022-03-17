const express = require('express');

const router = express.Router();

router.get('/recipes', (req, res) => {
  Recipe.find().sort({ createdAt: -1})
   .then((result) => {
     res.render('index', { title: 'Recipes', recipes: result});
   })
   .catch((err) => {
     res.render('error');
   })
});

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
})