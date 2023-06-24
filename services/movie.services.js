{getAllTicketsSer,getMovieByIDSer,createMovieSer,deleteMovieSer,updateMovieSer}
const Movie = require("../models/movie.model")

exports.getAllMoviesSer = async() =>{
    try{
        const movies = await Movie.find()
        return movies
    }catch(error){
        console.log(error)
        return error
    }  
}

exports.getMovieByIDSer = async(idSent) =>{
    try{
        const movies = await Movie.find({_id:idSent})
        return movies
    }catch(error){
        console.log(error)
        return error
    }  
}

exports.createMovieSer = async(movieData) =>{
    try{
        const newMovie = {
            name: data.name,
            description: data.description,
            casts: data.casts,
            rating: data.rating,
            genre: data.genre,
            posterUrl: data.posterUrl,
            trailerUrl: data.trailerUrl,
            language: data.language,
            releaseDate: data.releaseDate,
            releaseStatus: data.releaseStatus,
            director: data.director,
        }
        const movies = await Movie.create(newMovie)
        return movies
    }catch(error){
        console.log(error)
        return error
    }  
}

exports.deleteMovieSer = async(idSent) =>{
    try{
        const movies = await Movie.findOneAndDelete({_id:idSent})
        return movies
    }catch(error){
        console.log(error)
        return error
    }  
}

exports. updateMovieSer = async(idSent,updateData)=>{
  try{
    const movie = await Movie.findOne({_id:idSent})
    movie.name = updateData.name || movie.name;
    movie.description = updateData.description || movie.description;
    movie.casts = updateData.casts || movie.casts;
    movie.rating = updateData.rating || movie.rating;
    movie.genre = updateData.genre || movie.genre; 
    movie.posterUrl = updateData.posterUrl || movie.posterUrl; 
    movie.trailerUrl = updateData.trailerUrl || movie. trailerUrl;
    movie.language = updateData.language || movie.language; 
    movie.releaseDate = updateData.releaseDate || movie.releaseDate; 
    movie.releaseStatus = updateData.releaseStatus || movie.releaseStatus; 
    movie.director = updateData.director || movie.director; 

    const updatedMovie = await Movie.findOneAndUpdate({_id:idSent},movie,{new:true})
     return updatedMovie
  }catch(error){
    console.log(error);
    return error
  }
}

