const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const customerRoutes = require('./routes/customerRoute');
const vehicleRoutes = require('./routes/vehicleRoute');

// Use routes
app.use('/customers', customerRoutes);
app.use('/vehicles', vehicleRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});