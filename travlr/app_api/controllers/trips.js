const mongoose = require('mongoose');//.set('debug', true);
const Model = mongoose.model('trips');

//GET: /trips - lists all trips
const tripsList = async(req, res) => {
    Model
        .find({})//find all
        .exec((err, trips) => {
            if(!trips){
                return res
                    .status(404)
                    .json({"message": "trips not found"});
            }
            else if (err){
                return res
                    .status(404)
                    .json(err);
            }
            else{
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

//GET: /trips/:tripcode - returns a single trip
const tripsFindByCode = async(req, res) => {
    Model
        .findOne({'code':req.params.tripCode})//find specific trip
        .exec((err, trips) => {
            if( !trips ){
                return res
                    .status(404)
                    .json({"message": "Trip not found"});
            }
            else if (err){
                return res
                    .status(404)
                    .json(err);
            }
            else{
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

module.exports = {
    tripsList,
    tripsFindByCode
};