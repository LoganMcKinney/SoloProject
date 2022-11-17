const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/chores", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((res)=>{
    console.log("Successful connection to database")
}).catch((err)=>{
    console.log("Something went wrong")
})