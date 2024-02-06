const mongoose = require('mongoose');

require("dotenv").config(); 

 const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("Database Connected!!"))
    .catch((error)=>{
        console.log("Databse Not Connected"),
        console.error(error.message);
        process.exit();
    })
 }


 module.exports = dbConnect;