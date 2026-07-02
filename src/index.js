const express =require("express");]
const bodyParser=require("body-parser");
const setupAndStartServer=async() =>{
   // setting up express server 
   const app=express();
   const PORT=3000;

   app.use(bodyparser.json());
   app.use(bodyparser.urlencoded({extended:true}));

   app.listen(PORT,()=>{
     console.log(`Server started at ${PORT}`)
     console.log(process);
   })
}
setupAndStartServer();

