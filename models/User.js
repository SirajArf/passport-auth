const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId:{
        type: String,
        required: true
    },
    displayName:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    image:{
        type: String,
       
    },
    // email:{
    //     type: String,
       
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{ strict: false })

 const User= mongoose.model('User', UserSchema)

 module.exports = User;