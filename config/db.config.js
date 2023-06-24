require("dotenv").config();
const MONGODB_URL = process.env.MONGO_URL ||  'mongodb://127.0.0.1:27017/movieBookingAppDB'

module.exports = MONGODB_URL