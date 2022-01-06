const  express=require("express");
const{Prodcut}=require("../modal/product");
const route=express.Router();

route.get('/', async(req ,res)=>{
  const data = await Prodcut.find();
res.send(data)
})

route.post("/",  async (req, res)=>{
  
const data= new Prodcut({
    name:req.body.name,
    Description:req.body.Description,
   Richdescripton:req.body.Richdescripton,
   image:req.body.image,
    images:req.body.images,
    brand:req.body.brand,
    price:req.body.price,
    categaray:req.body.categaray,
    countStack:req.body.countStack,
    rating:req.body.rating,
    isFeature:req.body.isFeature,
    Datecreate:req.body.Datecreate
})
const result = await data.save();
res.send(result);
})
route.put("/:id", async(req, res)=>{
    const data= await Prodcut.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
    Description:req.body.Description,
   Richdescripton:req.body.Richdescripton,
   image:req.body.image,
    images:req.body.images,
    brand:req.body.brand,
    price:req.body.price,
    categaray:req.body.categaray,
    countStack:req.body.countStack,
    rating:req.body.rating,
    isFeature:req.body.isFeature,
    Datecreate:req.body.Datecreate
    })

    res.send(data);

})



route.delete("/:id",(req, res)=>{
    Prodcut.findByIdAndRemove(req.params.id).then((create)=>{
        res.send("data is deleted"+create)
    }).catch(err=>{
        res.send("errer whil is deleted"+err);
    })
})




module.exports= route;