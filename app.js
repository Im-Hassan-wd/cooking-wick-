const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(4002);

app.get('/', (res, res) => {
    res.send('hello world');
});