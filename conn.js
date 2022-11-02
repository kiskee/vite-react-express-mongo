const mongoose = require('mongoose');



const { mongose } = require( "./control/src/components/config.json")



mongoose.connect(mongose.DB);

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conected to MongoDB')})

objetobd.on('error', ()=>{console.log('Error in the conection to MongoDB')})

module.exports = mongoose