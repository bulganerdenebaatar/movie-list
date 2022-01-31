const MovieModel = require('../model/MovieModel');

//handle response from request from getMovies/Model
const getMovies = (req, res) => {
  MovieModel.getMovies((error, resultMovie) => {
    if (error) { res.status(400).send() }
    else {
      res.status(200).send(resultMovie)
    }
  })
}

const postMovies = (req, res) => {
  const movieName = req.body.title;
  console.log(movieName)
  MovieModel.postMovies(movieName, (error, postMovie) => {
    // movieName is an array
    console.log('movie name', movieName);
    if (error) { res.status(400).send() }
    else {
      res.status(201).send(movieName);
    }
  })
}

module.exports = { getMovies, postMovies };

// POST: req.body (requires BodyParser)