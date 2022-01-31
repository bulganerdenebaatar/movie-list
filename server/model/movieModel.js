// methods that query the db and callback

const db = require('../db');

const getMovies = (callback) => {
  db.query('select * from `movies`', function(error, resultMovie) {
    if (error) { callback(error, null) }
    else {
      callback(null, resultMovie);
    }
  })
}

// im gonna receive title insert db to (upon success) callback, im done with my job
const postMovies = (movieName, callback) => {
  db.query('insert into movies (title) values (?)',[ movieName ], (error, postMovie) => {
    if (error) { callback(error, null) }
    else {
      callback(null, postMovie)
    }
  })
}

module.exports = { getMovies, postMovies };
