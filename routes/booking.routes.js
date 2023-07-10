const {createBooking,getAllBookings,getBookingById,updateBooking,getBookingByTheatreId,getBookingByTheatreIdAndMovieId} = require('../controller/booking.controller');
const {isAuthenticated,isUserStatusApproved,isAdmin} = require('../middlewares/auth.middleware')
const {validateBookingReqBody,isValidBookingId,isAdminOrBookingOwner} = require('../middlewares/bookingValidation')

module.exports = function(app) {
app.post('/mba/api/v1/book/',[isAuthenticated,isUserStatusApproved,validateBookingReqBody],createBooking);
app.get('/mba/api/v1/book/', [isAuthenticated, isUserStatusApproved, isAdmin],getAllBookings);
app.get('/mba/api/v1/book/:id',[isAuthenticated,isUserStatusApproved,isValidBookingId,isAdminOrBookingOwner],getBookingById);
app.put('/mba/api/v1/book/:id',[isAuthenticated,is,isValidBookingId,isAdminOrBookingOwner],updateBooking);

// get booking by theatre id (only admin & user who made the booking)
app.get('/mba/api/v1/bookByTheatre/:id', [isAuthenticated, isUserStatusApproved, isAdminOrTheatreOwner], getBookingByTheatreId);

// get booking by theatre id (only admin & user who made the booking)
app.get('/mba/api/v1/bookByTheatreAndMovie/:id/:movieId', [isAuthenticated, isUserStatusApproved, isAdminOrTheatreOwner], getBookingByTheatreIdAndMovieId);

}
