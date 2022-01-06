const express=require("express");
const {category}=require("../modal/category");
const route=express.Router();

route.post('/',(req, res)=>{
    const cate=new category({
        name:req.body.name,
         color:req.body.color,
         icon:req.body.icon,
         image:req.body.image
 
    })

    cate.save().then((create)=>{
      res.send(create);
    }).catch((errr)=>{
        res.send(errr)
    })
 
    

})

route.get("/",async(req, res)=>{
    const data=await category.find();
res.send(data);
})
route.delete("/:id", async(req, res)=>{

    const data =await category.findByIdAndRemove(req.params.id)
 res.send(data)
})
route.put("/:id",async(req, res)=>{
    const data= await category.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        color:req.body.color,
        icon:req.body.icon,
        image:req.body.image

    })
    res.send(data);
})
module.exports=route;