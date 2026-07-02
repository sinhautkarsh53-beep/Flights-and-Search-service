const express =require("express");
require('dotenv').config()
const setupAndStartServer=async() =>{
   // setting up express server 
   const app=express();
   const PORT=3000;

   app.listen(PORT,()=>{
     console.log(`Server started at ${PORT}`)
     console.log(process);
   })
}
setupAndStartServer();

