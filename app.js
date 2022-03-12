const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(4002);

app.get('/', (req, res) => {
    res.send('hello world');
});