const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  mileage: { type: Number, required: true },
  transmission: { type: String, required: true }
 
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
