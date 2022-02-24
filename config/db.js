const mongoose = require("mongoose");
require('dotenv').config();

const db = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
          
            useUnifiedTopology: true,
           
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = db;