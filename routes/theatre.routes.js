const {
  getAllTheatres,
  getTheatreById,
  createTheatre,
  updateMoviesInTheatre,
  updateTheatre,
  deleteTheatre,
  checkMovieInATheatre,
} = require("../controller/theatre.controller");

module.exports = function (app) {
  app.get("/mba/api/v1/theatres", getAllTheatres);
  app.get("/mba/api/v1/theatres/:id", getTheatreById);
  app.post("/mba/api/v1/theatres", createTheatre);
  app.put("/mba/api/v1/theatres/:id", updateTheatre);
  app.delete("/mba/api/v1/theatres/:id", deleteTheatre);

  //addor Deletemovie to a theatre
  app.put("/mba/api/v1/theatres/:id/movies", updateMoviesInTheatre);
  //to check  if a movie is running in a given theatre
  app.get(
    "/mba/api/v1/theatres/:theatreId/movies/:movieId",checkMovieInATheatre);
};
