const mongoose = require("mongoose")

const ChoresSchema = mongoose.Schema({
        title:{
            type:String,
            required:[true,"Title is required"],
            minLength:[3,"Title must be at least 3 characters long."]
        },
        description:{
            type:String,
            required:[true,"Description is required"],
            minLength:[10,"Description must be at least 10 characters long."]
        },
        location:{
            type:String,
            required:[true,"Location is required"],
        },
    },{timestamps:true})


const Chores = mongoose.model('Chores', ChoresSchema)

module.exports = Chores