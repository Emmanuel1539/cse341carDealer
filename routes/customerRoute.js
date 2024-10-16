const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();



// Apply the customer-specific routes using middleware
router.use('/customers', (req, res, next) => {

    console.log('Customer middleware is running');
    next();  // Proceed to the actual route handler
});
// Vehicle routes

router.get('/', customerController.getAllCustomers);
router.get('/:id', customerController.getCustomerById);
router.post('/', customerController.createCustomer);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);


module.exports = router;