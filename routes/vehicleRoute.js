const express = require('express');
const vehicleController = require('../controllers/vehicleController');
const router = express.Router();
const {isAuthenticated} = require('../middleware/authenticate')



// Vehicle routes

router.get('/', vehicleController.getAllVehicles);
router.get('/:id', vehicleController.getVehicleById);
router.post('/', isAuthenticated, vehicleController.createVehicle);
router.put('/:id', isAuthenticated, vehicleController.updateVehicle);
router.delete('/:id', isAuthenticated, vehicleController.deleteVehicle);


module.exports = router;