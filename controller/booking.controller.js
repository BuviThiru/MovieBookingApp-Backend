const {createBookingSer,getAllBookingsSer,getBookingByIdSer,updateBookingSer} = require('../services/booking.services')

exports.createBooking = async(req,res)=>{
    try{
        const response = await createBookingSer(req.body,req.user)
        if (response.error || !response) {
          return res.status(401).send({
            Error: response.error,
          });
        }else{
            return res.status(200).send({
                Message: "Booking done",
                Response : response
            })
        }
      } catch (error) {
        console.log(error)
      }
}

exports.etAllBookings = async(req,res)=>{
    try{
        const response = await getAllBookingsSer()
        if (response.error || !response) {
          return res.status(401).send({
            Error: response.error,
          });
        }else{
            return res.status(200).send({
                Message: "Booking done",
                Response : response
            })
        }
      } catch (error) {
        console.log(error)
      }

}
exports. getBookingById =async(req,res)=>{
    try{
        const response = await getBookingByIdSer(req.params.id)
        if (response.error || !response) {
          return res.status(401).send({
            Error: response.error,
          });
        }else{
            return res.status(200).send({
                Message: "Booking done",
                Response : response
            })
        }
      } catch (error) {
        console.log(error)
      }
}

exports.updateBooking=async(req,res)=>{
    try{
        const response = await updateBookingSer(req.body,req.params.id)
        if (response.error || !response) {
          return res.status(401).send({
            Error: response.error,
          });
        }else{
            return res.status(200).send({
                Message: "Booking done",
                Response : response
            })
        }
      } catch (error) {
        console.log(error)
      }
}

exports.getBookingByTheatreId = async(req,res)=>{}
exports.getBookingByTheatreIdAndMovieId = async(req,res)=>{}