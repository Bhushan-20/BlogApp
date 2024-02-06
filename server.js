const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blogRoute = require("./routes/route");

app.use("/api/v1",blogRoute); 


const dbConnect =  require("./config/database");
dbConnect();

app.get("/" , (req,res) => {
    res.send(`<h1>This is Home Page</h1>`)
})

app.listen(PORT,()=>{
    console.log(`Server Connected successfully at ${PORT}`);
})