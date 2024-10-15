const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();

router.get('/', (req, res) => {

    res.send('Hello my customers there!!!');
});

// Apply the customer-specific routes using middleware
router.use('/customers', (req, res, next) => {

    console.log('Customer middleware is running');
    next();  // Proceed to the actual route handler
});
// Vehicle routes

router.get('/customers', customerController.getAllCustomers);
router.get('/customers/:id', customerController.getCustomerById);
router.post('/customers', customerController.createCustomer);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);


module.exports = router;