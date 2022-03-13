const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(4002);

// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const recipes = [
      {title: 'Pizza', ingrident: 'curry, mustad, mushroom'},
      {title: 'Pizza', ingrident: 'curry, hot sauce, mushroom'},
      {title: 'Pizza', ingrident: 'curry, mustad, mushroom'},
    ]
    res.render('index', { title: 'Home'});
});

app.get('/create', (req, res) => {
    res.render('create', { title: 'Add new recipe'});
});

// 404
app.get('/404', (req, res) => {
    res.render('404', { title: '404'});
})