import express from "express";

import Connection from "./config/db.js";
import usercontroller from './controller/user.controller.js'
import moviecontroller from './controller/movie.controller.js';


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000 ;
app.use("/user",usercontroller);
app.use("/movie",moviecontroller);

app.listen(PORT ,async()=>{
    try{
        await Connection();
        console.log(`Server is running on  ${PORT}`);
    }catch(error){
            console.log({error:error.message})
    }
})