const {getAllTheatresSer,getTheatreByIdSer,createTheatreSer,updateTheatreSer,deleteTheatreSer,updateMoviesInTheatreSer,checkMovieInATheatreSer} = require('../services/theatre.services')

exports.getAllTheatres = async (req, res) => {
    try {
      const response = await getAllTheatresSer(req.query);
      if (response.error || !response) {
        return res.status(401).send({
          Message: response.error,
        });
      }else{
          return res.status(200).send({
              Message: "Successfully fetched all the theatres",
              Response : response
          })
      }
    } catch (error) {
      console.log(error)
    }
  };
  
  exports. getTheatreById = async (req, res) => {
      try {
        const response = await getTheatreByIdSer(req.params.id);
        if (response.error || !response) {
          return res.status(401).send({
            Message: response.error,
          });
        }else{
            return res.status(200).send({
                Message: "Successfully fetched theatre by ID",
                Response : response
            })
        }
      } catch (error) {
        console.log(error)
      }
    };
  
  
    exports.createTheatre = async (req, res) => {
      try {
        const response = await createTheatreSer(req.body);
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
  
    exports.updateTheatre = async (req, res) => {
      try {
        const response = await updateTheatreSer(req.params.id,req.body);
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
  
    
    exports.deleteTheatre = async (req, res) => {
      try {
        const response = await deleteTheatreSer(req.params.id);
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


    exports.updateMoviesInTheatre = async(req,res)=>{
      try {
        const response = await updateMoviesInTheatreSer(req.params.id,req.body);
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

    }

    exports.checkMovieInATheatre = async(req,res)=>{
      try {
        const response = await checkMovieInATheatreSer(req.params.theatreId,req.params.movieId);
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

    }