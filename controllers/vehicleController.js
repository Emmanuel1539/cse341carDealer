const Vehicle = require('../models/vehicle');

// Create a new vehicle 

const createVehicle = async (req, res) => {
    try{
        const newVehicle = new Vehicle(req.body);
        await newVehicle.save();
        res.status(201).json(newVehicle);
    } catch (error) {
    res.status(401).json({ message: 'Something went wrong creating user', error })
}};

// Get all vehicles 
const getAllVehicles = async(req, res) => {
    try{
        const allVehicles = await Vehicle.find();
        if(!allVehicles)
           return res.status(401).json({message: 'Sorry you haven not added any vehicle'});
            res.status(201).json(allVehicles);
            res.status
        
    }catch (error){
        res.status(401).json({message: 'Error fetching vehicles', error})
    }
}


// Get vehicle by Id
const getVehicleById = async (req, res) => {
    try{
        const vehicleId = req.params.id; 
        const vehicle = await Vehicle.findById(vehicleId);
        if(!vehicle) return res.status(404).json({message: 'Vehicle not found'});
        res.json(vehicle)
    } catch (error) {
        res.status(501).json({message: 'Error while fetching vehicle', error})
    }
}

// Get and update vehicle
const updateVehicle = async(req, res) => {
    try{
        const updateVehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updateVehicle) return res.status(401).json({message: 'Could not find vehicle id'});
        res.status(201).json(updateVehicle);
    } catch (error) {
        res.status(501).json({message: 'Could not update vehicle', error})
    }
}

// Find and delete vehicle

const deleteVehicle = async (req, res) => {
    try{
        const deleteVehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if(!deleteVehicle) return res.status(401).json({message: 'Could not find vehicle id'});
        res.json({message: 'Vehicle successfully deleted'})
    } catch(error) {
        res.status(501).json({message: 'Could not delete vehicle'})
    }
}

module.exports = {createVehicle, 
                getVehicleById, 
                getAllVehicles, 
                updateVehicle,
                deleteVehicle};
