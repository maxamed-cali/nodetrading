const express=require("express");
const mongoose=require("mongoose");
require("dotenv/config");
const morgan=require('morgan');
const app=express();

//load files
const  authjwt=require("./helper/jwt");
const errorhandler=require("./helper/error-handler");
const cateRoute =require("./src/route/category");
const ProdRoute= require("./src/route/prodcut");
const userRoute=require("./src/route/user");
const api=process.env.url;
//middle ware
app.use(morgan('tiny'));
app.use(authjwt());
app.use(errorhandler)
app.use(express.json());
app.use(`${api}/categary`,cateRoute );
app.use(`${api}/product`, ProdRoute);

app.use(`${api}/user`, userRoute);







mongoose.connect("mongodb://localhost/shope").then(()=>{
    console.log("database is connected sucess fully");
}).catch((err)=>{
    console.log("err while is connected database"+err);
})

app.listen(3000,()=>{
   
    console.log("sever is runing http://localhost:3000")
})