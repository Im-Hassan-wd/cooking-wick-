const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const Recipe = require('./models/recipe');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

// connect to db
const dbURI = 'mongodb+srv://weird:test123@learningnode.meubb.mongodb.net/cooking-wick';
mongoose.connect(dbURI)
 .then(result => app.listen(5000))
 .catch(err => console.log(err));

// mongoose route
app.get('/add-recipe', (req, res) => {
    const recipe = new Recipe({
      title: 'Hot pizza',
      method: '12 gallons of water',
      ingrident: 'mushroom, hot-sauce, water',
      cookingTime: '12'
    })
})

app.get('/', (req, res) => {
    const recipes = [
      {title: 'Pizza', cookingTime: '3', method: 'curry, mustad, mushroom'},
      {title: 'Pizza', cookingTime: '38', method: 'curry, hot sauce, mushroom'},
      {title: 'Pizza', cookingTime: '17', method: 'curry, mustad, mushroom'},
    ]
    res.render('index', { title: 'Home', recipes});
});

app.get('/create', (req, res) => {
    res.render('create', { title: 'Add new recipe'});
});

// 404
app.get('/404', (req, res) => {
    res.render('404', { title: '404'});
});