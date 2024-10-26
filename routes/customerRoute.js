const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();
const {isAuthenticated} = require('../middleware/authenticate')

// Vehicle routes

router.get('/', customerController.getAllCustomers);
router.get('/:id', customerController.getCustomerById);
router.post('/', isAuthenticated, customerController.createCustomer);
router.put('/:id', isAuthenticated, customerController.updateCustomer);
router.delete('/:id', isAuthenticated, customerController.deleteCustomer);


module.exports = router;