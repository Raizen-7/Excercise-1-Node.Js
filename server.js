const express = require('express');
const { app } = require('./app');
const { db } = require('./utils/database.util');

//Enable Express app to recive JSON data
app.use(express.json());

const startServer = async ()=>{
    try{
        await db.authenticate();
        await db.sync();

        //port server to listen
        const PORT = 4000;
        app.listen(PORT, ()=> {
            console.log('App Express running!');
        })
    } catch(error){
        console.log(error);
    }
};

startServer();