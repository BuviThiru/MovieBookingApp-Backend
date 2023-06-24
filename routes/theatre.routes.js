const {getAllTheatres,getTheatreById,createTheatre,updateTheatre,deleteTheatre} = require("../controller/theatre.controller")

module.exports = function(app){
    app.get('/mba/api/v1/theatres', getAllTheatres);
    app.get('/mba/api/v1/theatres/:id', getTheatreById);
    app.post('/mba/api/v1/theatres', createTheatre);
    app.put('/mba/api/v1/theatres/:id',updateTheatre);
    app.delete("/mba/api/v1/theatres/:id",deleteTheatre)

}