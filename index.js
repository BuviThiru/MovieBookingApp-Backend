const express = require("express");
const app = express();
const mongoose = require("mongoose")
const DBURL = require('./config/db.config')
const PORT = require('./config/server.config')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
    next();
  });

const movieRoutes = require('./routes/movie.routes')
const theatreRoutes = require('./routes/theatre.routes')
movieRoutes(app);
theatreRoutes(app);

  app.listen(PORT, ()=>{
    console.log(PORT,DBURL)
    console.log("APP listening at the port: ",PORT)
    mongoose.connect(DBURL)
  });