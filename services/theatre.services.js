

const Theatre = require('../models/theatre.model')


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
