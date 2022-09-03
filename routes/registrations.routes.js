const express = require('express');

//Controllers
const { 
    getAllRegistrations,
    getRegistrationById,
    checkIn,
    checkOut,
    deleteRegistration
} = require('../controllers/registrations.controller');

const registrationsRouter = express.Router();

registrationsRouter.get('/', getAllRegistrations );

registrationsRouter.get('/:id', getRegistrationById);

registrationsRouter.post('/', checkIn );

registrationsRouter.patch('/:id', checkOut);

registrationsRouter.delete('/:id', deleteRegistration);

module.exports = { registrationsRouter };