import express from 'express';
import jwt from 'jsonwebtoken';
import User from "../model/userSchema.model.js";
import bcrypt from 'bcrypt';
const Router = express.Router();

Router.post("/register", async(req, res )=>{
    try{ 

   
    const {user, email , password, role} = req.body;

        const isPresent = await User.findOne({email});
        const newUser = await User.create({user,email,password});
        
        if(isPresent){
            return res.send("Email id already exists")
        }
        return res.status(201).send("Successfully Registerd ")
    }   catch(error){
        res.send({error: error.message })
    }

    })


    Router.post("/login", async(req, res )=>{
        try{
    
       
        const { email , password} = req.body;
    
            const isPresent = await User.findOne({email});
            
            
            if(!isPresent){
                return res.send("User is not registered ")
            }

            const compare = bcrypt.compareSync(password, isPresent.password)
            if (!compare) {
                return res.send("incorrect password");
            }
            // console.log("Password is : "+compare)

            const payload = {userId:isPresent._id, role:isPresent.role};
            const token = jwt.sign(payload , "Ajay" , {expiresIn:"2h"})
            return res.status(201).send({message : "Successfully Login ",token :token})
        }   catch(error){
            res.send({error: error.message })
        }
    
        })


    export default Router;
