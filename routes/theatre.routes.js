const {
  getAllTheatres,
  getTheatreById,
  createTheatre,
  updateMoviesInTheatre,
  updateTheatre,
  deleteTheatre,
  checkMovieInATheatre,
} = require("../controller/theatre.controller");

const {isAuthenticated,isUserStatusApproved,isAdmin,isAdminOrClient} = require('../middlewares/auth.middleware')
const {validateTheatreReqBody, isAdminOrTheatreOwner} = require('../middlewares/theatreValidation')

module.exports = function (app) {
  app.get("/mba/api/v1/theatres", getAllTheatres);
  app.get("/mba/api/v1/theatres/:id", getTheatreById);
  app.post("/mba/api/v1/theatres",[validateTheatreReqBody,isAuthenticated,isUserStatusApproved,isAdmin,isAdminOrClient], createTheatre);
  app.put("/mba/api/v1/theatres/:id",[isAuthenticated,isUserStatusApproved,isAdminOrTheatreOwner], updateTheatre);
  app.delete("/mba/api/v1/theatres/:id",[isAuthenticated,isUserStatusApproved,isAdminOrTheatreOwner], deleteTheatre);

  //addor Deletemovie to a theatre
  app.put("/mba/api/v1/theatres/:id/movies",[isAuthenticated,isUserStatusApproved,isAdminOrTheatreOwner], updateMoviesInTheatre);
  //to check  if a movie is running in a given theatre
  app.get(
    "/mba/api/v1/theatres/:theatreId/movies/:movieId",checkMovieInATheatre);
};
