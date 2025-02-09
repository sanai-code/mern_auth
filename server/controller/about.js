import { couseModel } from "../db.js"


export let about = async(req,res)=>{
    try {
        let response = await couseModel.find({})
        if(response){
            res.json({
                data:response
            })
        }
    } catch (error) {
        
        res.json({
            msg:"li"
        })
    }
}