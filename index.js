const express = require('express');
const app = express();

//load config from env file
require("dotenv").config();
const PORT= process.env.PORT|| 4000;

//middleware to parse json new body(req body se)
app.use(express.json());

//import routes for todo api 
const todoRoutes = require("./routes/todos");

//mount the todo api routes
app.use("/api/v1",todoRoutes); //server koroute se connect kar diya

//start server
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
});

//CONNECT TO DATABASE
const dbconnect=require("./config/database");
dbconnect();

//default route mens kisi route par nhi hai i.e  initially at homepage
app.get("/",(req,res)=>{
    res.send('<h1> This is HOMEPAGE baby</h1>');
})
