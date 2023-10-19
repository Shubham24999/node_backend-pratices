const jwt=require("jsonwebtoken")

const authentication=(req,res,next)=>{
    const token=req.headers?.authorization
    if(token){
        jwt.verify(token, 'jwt',function (err, decoded){
            if(err){
                res.status(403).send({"msg":"Please Login","err":err.message})
            }else{
                next()
            }

        });
    }else{
        res.status(403).send("Please Login")
    }
}

module.exports={
    authentication
}