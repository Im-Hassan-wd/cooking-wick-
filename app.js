const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const uri = require('./dbURI/uri');
const recipeRoutes = require('./routes/recipeRoutes');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

// connect to db
const dbURI = uri;
mongoose.connect(dbURI)
 .then(result => app.listen(4001))
 .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.redirect('/recipes')
});

// recipe routes
app.use(recipeRoutes);

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404'});
});