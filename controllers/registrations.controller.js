//Models
const { Registration } = require('../models/registration.model')

const getAllRegistrations = async (req, res, next) => {
    try{
       const registrations = await Registration.findAll();

       res.status(200).json({ registrations });
    }catch(err){}
};
const getRegistrationById  = async (req, res, next) => {
    try{
       const { id } = req.params
       const registrationById = await Registration.findOne({where: {id}});

       if(!registrationById) { 
        return res.status(404).json({
            status: 'error',
            message: 'Registration not found',
        })
       }
       
       res.status(200).json({ registrationById });

    }catch(err){}
};
const checkIn = async (req, res, next) => {
    try{
       const { entranceTime } = req.body;
       
       const newRegistration = Registration.create({ entranceTime });

       res.status(200).json({
        newRegistration,
       });

    }catch(err){}
};
const checkOut = async (req, res, next) => {
    try{
        const { id } = req.params;
        const { exitTime } = req.body;

        const registrationById = await Registration.findOne({where: {id}} );

        if(!registrationById) { 
         return res.status(404).json({
             status: 'error',
             message: 'Registration not found',
         })
        }

        await registrationById.update({ exitTime, status: 'Out' });

        res.status(204).json({ status: 'success' })

    }catch(err){}
};
const deleteRegistration = async (req, res, next) => {
    try{
        const { id } = req.params;

        const registrationById = await Registration.findOne({where: {id}} );

        if(!registrationById) { 
         return res.status(404).json({
             status: 'error',
             message: 'Registration not found',
         })
        }

        await registrationById.update({status: 'Cancelled' });

        res.status(204).json({ status: 'success' })

    }catch(err){}
};

module.exports = {
    getAllRegistrations,
    getRegistrationById,
    checkIn,
    checkOut,
    deleteRegistration
}