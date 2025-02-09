import jwt from "jsonwebtoken"

export const authMiddleware = (req,res,next)=>{
    let token = req.headers.token;
    if(!token){
        res.json({
            msg:'dont get token'
        })
    }else{

        console.log(token)
        let decode = jwt.verify(token,process.env.USER_JWT_SECRET)
        console.log(decode.id)
        if(decode.id){
            req.id = decode.id
            next();
        }
    }
}