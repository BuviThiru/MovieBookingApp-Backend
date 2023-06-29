const Theatre = require('../models/theatre.model');
const Movie = require('../models/movie.model');


exports.getAllTheatresSer = async(filter) =>{
    try{
        const theatre = await Theatre.find(filter)
        return theatre;
    }catch(error){
        console.log(error);
        return {error : error.message}
    }  
}

exports.getTheatreByIdSer = async(idSent) =>{
    try{
        const theatre = await Theatre.find({_id:idSent});
        return theatre;
    }catch(error){
        console.log(error);
        return {error : error.message}
    }  
}

exports.createTheatreSer = async(data) =>{
    try{
        const newTheatre = {
            name: data.name,
            description: data.description,
            rating: data.rating, 
            street: data.street,
            state: data.state,
            city: data.city,
            pincode: data.pincode,
        }
        const theatre = await Theatre.create(newTheatre);
        return theatre;
    }catch(error){
        console.log(error)
        return {error : error.message}
    }  
}

exports.deleteTheatreSer = async(idSent) =>{
    try{
        const theatre = await Theatre.findOneAndDelete({_id:idSent});
        return theatre;
    }catch(error){
        console.log(error)
        return {error : error.message}
    }  
}

exports. updateTheatreSer = async(idSent,data)=>{
  try{
    const theatre = await Theatre.findOne({_id:idSent})
    theatre.name = data.name || theatre.name;
    theatre.description = data.description || theatre.description;
    theatre.rating = data.rating || theatre.rating;
    theatre.street = data.street || theatre.street;
    theatre.state = data.state || theatre.state;
    theatre.city = data.city || theatre.city;
    theatre.pincode = data.pincode || theatre.pincode;

    const updatedTheatre= await Theatre.findOneAndUpdate({_id:idSent},theatre,{new:true})
     return updatedTheatre;
  }catch(error){
    return {error : error.message}
    return error
  }
}
const addMoviesInTheatre = async (theatreId, movieIds) => {
    try {
        const theatre = await Theatre.findById(theatreId);

        if (!theatre) {
          throw new Error('Theatre not found');
        }
    
        const existingMovies = await Movie.find({ _id: { $in: movieIds } });
    
        const validMovieIds = existingMovies.map(movie => movie._id);
    
        const newMovies = validMovieIds.filter(id => !theatre.movies.includes(id));
    
        if (newMovies.length === 0) {
          throw new Error('No new movies to add');
        }
    
        theatre.movies.push(...newMovies);
    
        const updatedTheatre = await theatre.save();
    
        return updatedTheatre;
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  }; 
  
  


  const deleteMoviesInTheatre = async (theatreId, movieIds) => {
    try {
      const theatre = await Theatre.findByIdAndUpdate(
        theatreId,
        { $pullAll: { movies: movieIds } },
        { new: true }
      );
  
      if (!theatre) {
        throw new Error('Theatre not found');
      }
  
      return theatre;
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  };

exports. updateMoviesInTheatreSer = async(theatreId,data) =>{
    try{
        const theatre = await Theatre.findOne({_id:theatreId});
        let response;
        if(theatre){
             if(data.addMovieIds)response = await addMoviesInTheatre(theatreId,data.addMovieIds);
             if(data.removeMovieIds)response = await deleteMoviesInTheatre(theatreId,data.removeMovieIds)
            return response         
        }else{
            throw new Error("Invalid theatre Id")
        }
    }catch(error){
        console.log(error)
        return {error : error.message}
    }  
}





exports.checkMovieInATheatreSer = async(theatreId, movieId) =>{
    try{
        const theatre = await Theatre.findOne({_id:theatreId})
        if(theatre){
            const movie = await Movie.findOne({_id:movieId})
            if(!movie){
                throw new Error("Invalid movie Id");
            }
            const successMessage = "Movie is present in given theatre";
            const failureMessage =  "Movie is not present in given theatre";
            const response =  theatre.movies.includes(movieId) ? successMessage : failureMessage
            return response;               
            
    }else{
        throw new Error("Invalid theatre Id");
    }

    }catch(error){
        console.log(error)
        return {error : error.message}
    }  
}