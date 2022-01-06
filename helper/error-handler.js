
function errorhandler(err, req, res, next){
 if(err.name ==='UnauthorizedError'){
   return  res.status(401).json({massage:"the user is not authorized"});
 }
 return res.status(500).json({massage:err})
}

module.exports=errorhandler;