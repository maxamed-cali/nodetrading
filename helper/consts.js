 const roles=[
     {
         type: "admin",
         routes:"*"
     },
     {
        type: "user",
        routes:[
            `/api/v1/product/`, 
            `/api/v1/user/`, 
        ]
    },
    {
        type: "test",
        routes:[
            `/api/v1/user/`, 
        ]
    }
 ]

 module.exports=roles;