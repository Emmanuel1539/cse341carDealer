const express = require('express');
const vehicleController = require('../controllers/vehicleController');
const router = express.Router();


router.get('/', (req, res) => {
    // swagger.tags-['Hello People']
    res.send('Hello vehicle lovers!!!');
});

// Apply the customer-specific routes using middleware
router.use('/vehicles', (req, res, next) => {

    console.log('Vehicles middleware is running');
    next();  // Proceed to the actual route handler
});


// Vehicle routes

router.get('/vehicles', vehicleController.getAllVehicles);
router.get('/vehicles/:id', vehicleController.getVehicleById);
router.post('/vehicles', vehicleController.createVehicle);
router.put('/vehicles/:id', vehicleController.updateVehicle);
router.delete('/vehicles:id', vehicleController.deleteVehicle);


module.exports = router;