const router=require('express').Router()

const User=require('../model/user')
const bcrypt = require('bcryptjs');

// for sighninn purpose

router.post("/register",async(req,res)=>{
    try {
    const {email,username,password}=req.body
    const exemail=await User.findOne({email:email})
    if(exemail)
    {
       return  res.status(400).json({
            success:false,
            message:"already exist"
        })
    }
    const haspas=bcrypt.hashSync(password,10);
        const user=new User({
            email,
            username,
            password:haspas
        })
       await user.save()
           return res.status(200).json({
                success:true,
                user
            }
            )
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"user already exits"
        })
    }
})
// for login

router.post("/login",async (req,res)=>{
    try{
        // const {email,password}=req.body
        const user=await User.findOne({email:req.body.email})
        if(!user)
        {
            return res.status(400).json({
                messaage:"user not exist"
            })
        }
        const ispass= bcrypt.compareSync(req.body.password,user.password) 
      if(!ispass)
      {
        return res.status(400).json({
            message:"passsword is wrong"
        })
      }
      const {password,...others}=user._doc;
      return res.status(200).json({
        others,
        message:"sucessful"
      })
    }catch(error)
    {

    }
})


module.exports=router