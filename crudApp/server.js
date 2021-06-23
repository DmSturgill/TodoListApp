const express = require("express"); 
const todo=require("./routes/todo");
const app = express();   //app object instantiated
const mongoose = require("./config/database");
const PORT = process.env.PORT || 5000; //does process.environment exist? 


mongoose.connection.on("error",console.error.bind(console,"mongoDB connection error"));
app.use(express.json());
app.use("/todos",todo);
app.listen(PORT, console.log(`Listening on port ${PORT}`));

