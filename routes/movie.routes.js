const {getAllMovies,getMovieByID,createMovie,updateMovie,deleteMovie} = require("../controller/movie.controller")

module.exports = function(app){
    app.get('/mba/api/v1/allmovies',getAllMovies)
    app.get('/mba/api/v1/movie/:id',getMovieByID)
    app.post('/mba/api/v1/movie',createMovie)
    app.put('/mba/api/v1/movie/:id',updateMovie)
    app.delete('/mba/api/v1/movie/:id',deleteMovie)
}