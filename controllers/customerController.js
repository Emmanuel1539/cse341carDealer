const Customer = require('../models/customer');

// create new customer
const createCustomer = async (req, res) => {
    try{
        const newCustomer = new Customer(req.body);
        await newCustomer.save();
        res.status(201).json(newCustomer)
    } catch(error){
        res.status(500).json({message: 'Error creating Customer', error})
    }
};

// Get all customers

const getAllCustomers = async (req, res) => {
    try{
        const customers = await Customer.find()
        if(!customers) return res.status(404).json({message: 'You have not added any customer yet'});
        res.json(customers);
        
    } catch(error){
        res.status(500).json({message: 'Error getting customers', error})
    }
}

// Get a single customer by ID
const getCustomerById = async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      if (!customer) return res.status(404).json({ message: 'Customer not found' });
      res.json(customer);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching customer', error });
    }
  };
  


// Update a customer
const updateCustomer = async (req, res) => {
    try {
      const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCustomer) return res.status(404).json({ message: 'Customer not found' });
      res.json(updatedCustomer);
    } catch (error) {
      res.status(500).json({ message: 'Error updating customer', error });
    }
  };



// Delete a customer
const deleteCustomer = async (req, res) => {
    try {
      const customer = await Customer.findByIdAndDelete(req.params.id);
      if (!customer) return res.status(404).json({ message: 'Customer not found' });
      res.json({ message: 'Customer deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting customer', error });
    }
  };




module.exports = {createCustomer, 
                  getCustomerById, 
                  getAllCustomers, 
                  updateCustomer,
                  deleteCustomer};
