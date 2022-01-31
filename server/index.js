const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require('./db');
const MovieController = require('./controller/movieController.js');

app.use(express.urlencoded({ extend: true })); // body

app.use(express.static('client/dist'));

//GET method route
app.get('/api/movies', MovieController.getMovies);//route handler, ask controller to handle getting stuff...

// POST method route
app.post('/api/movies', MovieController.postMovies);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})