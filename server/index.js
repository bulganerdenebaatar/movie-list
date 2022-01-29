const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require('./db');
const MovieController = require('./controller/movieController.js');

app.use(express.urlencoded({ extend: true })); // body

app.use(express.static('client/dist'));

//GET method route
app.get('/api/movies', (req, res) => { //route handler, ask controller to handle getting stuff...
  MovieController.getMovies(req, res);
})

// POST method route
app.post('/api/movies',(req, res) => {
  res.send('POST request');
  console.log('req body',req.body);
  MovieController.postMovies(req, res);
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})