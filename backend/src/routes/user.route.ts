
import express, {Request,Response} from "express";

import jwt from "jsonwebtoken";
import verifyToken from "../middlewares/auth.middleware";

import User from "../models/user.model";
import {check,validationResult} from "express-validator";



const router=express.Router();

router.get("/me",verifyToken,async (req:Request,res:Response)=>{
   const userId=req.userId;

  try {
     const user=await User.findById(userId).select("-password");
     if(!user){
      res.status(404).json({
         message:"user not found"
      })
     }
   
  } catch (error) {
    console.log(error);
     res.status(500).json({ message: "something went wrong" });
   
  }
})

router.post("/register", [
   check("firstName","First Name is required").isString(),
   check("lastName","Last Name is required").isString(),
   check("email","Email is required").isEmail(),
   check("password","Password with 6 or more characters required").isLength({min:6}),
],async (req:Request, res:Response) =>{

   const errors=validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({
         message:errors.array()
      })
   }

   try {
      let user=await User.findOne({email:req.body.email});
      if(user){
      return res.status(400).json({
         message:"User already exists"
      })
   }
   user=new User(req.body);
   await user.save();

   const token=jwt.sign(
      {userId:user._id},
      process.env.JWT_SECRET_KEY as string,
      {
         expiresIn:"1d",
      }
   );

   res.cookie("auth_token",token,{
      httpOnly:true,
      secure:process.env.NODE_ENV==="production",
      maxAge:86400000,
   })
    return res.status(200).send({ message: "User registered OK" });
      
   
      
   } catch (error) {
      console.log(error)
      res.status(500).send({message:"something went wrong"})
   }

})

export default router;