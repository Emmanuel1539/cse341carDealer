const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    customerType: { type: String, default: true },
    registeredOn: { type: Date, default: Date.now }
})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;