const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    lname: String,
    email: { type: String, required: true, unique: true },
     password: { type: String, required: true }

    
})
module.exports=mongoose.model('User',userSchema)