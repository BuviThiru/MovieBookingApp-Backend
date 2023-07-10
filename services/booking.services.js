const Booking = require('../models/booking.model');
const User = require('../models/user.model');
const Movie = require('../models/movie.model');
const Theatre = require('../models/theatre.model');

exports.createBookingSer = async(data,user)=>{
   try{
    const newBooking = {
        theatreId: data.theatreId,
        movieId: data.movieId,
        userId: user._id,
        startTime: data.startTime,
        endTime: data.endTime,
        noOfSeats: data.noOfSeats,
        totalCost: data.totalCost,
    };
    const booking = await Booking.create(newBooking)
    const userInfo = await User.findOne({_id:booking.userId});
    userInfo.bookings.push(booking._id);
    await User.findOneAndUpdate({_id: userInfo._id}, userInfo);

    const movie = await Movie.findOne({_id:booking.movieId});
    movie.bookings.push(booking._id);
    await Movie.findOneAndUpdate({_id: movie._id}, movie);

    const theatre = await Theatre.findOne({_id:booking.theatreId});
    theatre.bookings.push(booking._id);
    await Theatre.findOneAndUpdate({_id: theatre._id}, theatre);
    return booking;

   }catch(error){
    console.log(error.message)
    return {error : error.message};
   }

}

exports.getAllBookingsSer = async()=>{
try{
    const bookings = await Booking.find()
    return bookings
}catch(error){
    return {error:error.message}
}

}
exports.getBookingByIdSer = async(sentId)=>{
    try{
        const booking = await Booking.findOne({_id:sentId})
        return booking
    }catch(error){
        return {error:error.message}
    } 
}

exports.updateBookingSer = async(data,sentId)=>{
    try{
        const booking = await Booking.findOne({_id:sentId})
        if(!booking){
            throw  new Error ("Invalid Booking ID ")
        }
        booking.theatreId = data.theatreId || booking.theatreId;
        booking.movieId = data.movieId || booking.movieId;
        booking.startTime = data.startTime || booking.startTime;
        booking.endTime = data.endTime || booking.endTime;
        booking.noOfSeats = data.noOfSeats || booking.noOfSeats,
        booking.totalCost = data.totalCost || booking.totalCost;
        booking.status = data.status || booking.status;
        const updatedBooking = await Booking.findOneAndUpdate({_id: sentId}, data, {new: true});
        return updatedBooking;
    }catch(error){
        return {error:error.message}
    }

}