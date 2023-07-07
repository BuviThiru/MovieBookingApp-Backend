const {getAllMovies,getMovieByID,createMovie,updateMovie,deleteMovie,getTheatresList} = require("../controller/movie.controller")
const {validateMovieReqBody} = require('../middlewares/movieValidation')
const {isAuthenticated,isUserStatusApproved,isAdmin} = require('../middlewares/auth.middleware')

module.exports = function(app){
    app.get('/mba/api/v1/allmovies',getAllMovies)
    app.get('/mba/api/v1/movie/:id',getMovieByID)
    app.post('/mba/api/v1/movie',[validateMovieReqBody,isAuthenticated,isUserStatusApproved,isAdmin],createMovie)
    app.put('/mba/api/v1/movie/:id',[isAuthenticated,isUserStatusApproved,isAdmin],updateMovie)
    app.delete('/mba/api/v1/movie/:id',[isAuthenticated,isUserStatusApproved,isAdmin],deleteMovie)
  // to get the list of theatres running the given movie by movieId
    app.get('/mba/api/v1/movies/:id/theatres',getTheatresList)
}