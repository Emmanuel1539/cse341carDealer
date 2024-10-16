const express = require('express');
const vehicleController = require('../controllers/vehicleController');
const router = express.Router();




// Apply the customer-specific routes using middleware
router.use('/vehicles', (req, res, next) => {

    console.log('Vehicles middleware is running');
    next();  // Proceed to the actual route handler
});


// Vehicle routes

router.get('/', vehicleController.getAllVehicles);
router.get('/:id', vehicleController.getVehicleById);
router.post('/', vehicleController.createVehicle);
router.put('/:id', vehicleController.updateVehicle);
router.delete('/:id', vehicleController.deleteVehicle);


module.exports = router;