const express=require("express");
const {User}=require("../modal/user");
const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken");
const route=express.Router();
route.get("/:id", async(req, res)=>{
  const data=await User.findById(req.params.id).select("-passwordhash");
  if(!data)return res.status(400).json({status:false})
  res.send(data);
})

route.get("/",async(req, res)=>{
 const data= await User.find().select("-passwordhash");
 res.send(data);
})

route.post("/",async(req, res)=>{
const user=new User({
    name:req.body.name,
    email:req.body.email,
    passwordhash:bcrypt.hashSync(req.body.password, 10),
    phone:req.body.phone,
    apartment:req.body.apartment,
    city:req.body.city,
    zip:req.body.zip,
    isAdmin:req.body.isAdmin
})

  const data= await user.save();

  res.send(data)
})

route.put("/:id", async(req, res)=>{
const data= await User.findByIdAndUpdate(req.params.id,{
  name:req.body.name,
  email:req.body.email,
  passwordhash:req.body.password,
  phone:req.body.phone,
  apartment:req.body.apartment,
  city:req.body.city,
  zip:req.body.zip,
  isAdmin:req.body.isAdmin
})
if(!data) return res.status(400).send("user is not created");
res.send(data)
})

route.delete("/:id", async(req, res)=>{
const data=await User.findByIdAndRemove(req.params.id);
res.send(data);
})

route.post("/login",async(req, res)=>{
 const data= await User.findOne({email:req.body.email})
 if(!data){
   return res.status(400).send("The user is not founded");
 }
 if(data && bcrypt.compareSync(req.body.password,data.passwordhash)){
  const token=jwt.sign(
    {
      userid:data.id,
      isAdmin:data.isAdmin,
      type: "user"
    },
    "secret"
  )
  return res.status(200).send({email:data.email, token:token});
 }
 else
 {
  return res.status(400).send("password are incorect");
 }
 
})




module.exports=route;