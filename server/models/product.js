const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    dedcription:String,
    image:String

    
})
module.exports=mongoose.model('Product',productSchema)