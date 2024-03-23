const mongoose =require('mongoose')

const todoschema =new mongoose.Schema({
    task:String
})
const todomodel=mongoose.model("todo",todoschema)
module.exports=todomodel