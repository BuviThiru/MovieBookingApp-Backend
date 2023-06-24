const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    name : {
        type :String,
        require :true
    },
    description:{
        type : String,
        required:true
    },
    casts :{
        type : [String],
        required :true
    },
    rating :{
        type : Number,
        required :true
    },
    genre:{
        type : [String],
        required :true
    },
    posterUrl :{
        type : String
    },
    trailerUrl : {
        type : String
    },
    language:{
    type: String,
    require : true
    },
    releaseDate:{
        type : Date,
        require: true,
    },
    releaseStatus:{
        type: String,
        required : true
    },
    director:{
        type: [String],
        require: true
    },createdAt :{
        type : Date,
        required :true,
        default:Date.now(),
        immutable: true,
    },
    updatedAt : {
        type : Date,
        required : true,
        default : Date.now()
    }})

    module. exports  = mongoose.model("Movie",movieSchema);
   