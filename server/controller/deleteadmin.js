import { response } from "express"
import { usermodel } from "../db.js"


export let DeleteAdmin = async (req,res)=>{
    try {
        let id = req.body._id
        let response = await usermodel.deleteOne({_id:id})
        res.json({
            id:response
        })    
    } catch (error) {
        res.json({
            err:'some error while deleting'
        })
    }
    
}