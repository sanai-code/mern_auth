import { Router } from "express";
import { authMiddleware } from "../middleware/auth.js";
import { adminAuthMiddleware } from "../middleware/admin-auth.js";
import { DeleteAdmin } from "../controller/deleteadmin.js";
import { GetUser } from "../controller/getUser.js";


export let adminRouter = Router();
adminRouter.post("/",authMiddleware,adminAuthMiddleware,(req,res)=>{
    let response = req.response 
    
    console.log('this is isdf sdfsd',response)
    res.json({
        users:response
    })
})

adminRouter.post("/user/:id",authMiddleware,adminAuthMiddleware,GetUser)
// adminRouter.put("/")
adminRouter.post("/delete",DeleteAdmin)