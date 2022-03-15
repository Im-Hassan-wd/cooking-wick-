const express = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const morgan = require('morgan');
const Recipe = require('./models/recipe');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

// connect to db
const dbURI = 'mongodb+srv://weird:test123@learningnode.meubb.mongodb.net/cooking-wick';
mongoose.connect(dbURI)
 .then(result => app.listen(4001))
 .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.redirect('/recipes')
});

app.get('/recipes', (req, res) => {
  Recipe.find().sort({ createdAt: -1})
   .then((result) => {
     res.render('index', { title: 'Recipes', recipes: result});
   })
   .catch((err) => {
     res.render('error');
   })
});

app.post('/', (req, res) => {
  const recipe = new Recipe(req.body)

  recipe.save()
   .then(result => res.redirect('/'))
   .catch(err => console.log(err))
});

app.get('/recipe/:id', (req, res) => {
  const id = res.params.id;
  console.log(id);
})

app.get('/create', (req, res) => res.render('create', { title: 'Add new recipe'}));

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404'});
});