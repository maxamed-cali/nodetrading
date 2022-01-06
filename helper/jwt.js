const expressjwt=require('express-jwt');
const roles = require('./consts');
function authjwt(){
 
    return expressjwt({
         secret:"secret",
        algorithms:['HS256'],
        isRevoked: isRevoked

    }).unless({
        
        path:[
            {url:'/api/v1/product',methods:['GET','OPTIONS']},
            '/api/v1/user/login'
        ]
    })
}
async function isRevoked(req, payload, done){
if(!payload.isAdmin){
   const {routes}= roles.find(item=>item.type===payload.type)
   console.log(routes)
  
    console.log(req.path)

    if (!routes.includes(req.path)) {
       done(null, true) 
    }
}
done();
}

module.exports=authjwt;