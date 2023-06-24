const {getAllMoviesSer,getMovieByIDSer,createMovieSer,deleteMovieSer,updateMovieSer} = require('../services/movie.services')

exports.getAllMovies = async (req, res) => {
  try {
    const response = await getAllMoviesSer();
    if (response.error || !response) {
      return res.status(401).send({
        Message: response.error,
      });
    }else{
        return res.status(200).send({
            Message: "Successfully fetched all the movies",
            Response : response
        })
    }
  } catch (error) {
    console.log(error)
  }
};

exports.getMovieByID = async (req, res) => {
    try {
      const response = await getMovieByIDSer(req.params);
      if (response.error || !response) {
        return res.status(401).send({
          Message: response.error,
        });
      }else{
          return res.status(200).send({
              Message: "Successfully fetched movie by ID",
              Response : response
          })
      }
    } catch (error) {
      console.log(error)
    }
  };


  exports.createMovie = async (req, res) => {
    try {
      const response = await createMovieSer(req.body);
      if (response.error || !response) {
        return res.status(401).send({
          Message: response.error,
        });
      }else{
          return res.status(200).send({
              Message: "Successfully  created  the movie",
              Response : response
          })
      }
    } catch (error) {
      console.log(error)
    }
  };

  exports.updateMovie = async (req, res) => {
    try {
      const response = await updateMovieSer(req.params,req.body);
      if (response.error || !response) {
        return res.status(401).send({
          Message: response.error,
        });
      }else{
          return res.status(200).send({
              Message: "Successfully  updated  the movie",
              Response : response
          })
      }
    } catch (error) {
      console.log(error)
    }
  };

  
  exports.deleteMovie = async (req, res) => {
    try {
      const response = await deleteMovieSer(req.params);
      if (response.error || !response) {
        return res.status(401).send({
          Message: response.error,
        });
      }else{
          return res.status(200).send({
              Message: "Successfully  deleted  the movie",
              Response : response
          })
      }
    } catch (error) {
      console.log(error)
    }
  };
  

