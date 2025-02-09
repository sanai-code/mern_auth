import { usermodel } from "../db.js"



export let Profile = async(req,res)=>{
    let _id = req.id

    let response = await usermodel.findOne({
        _id:_id
    })
    if(response){
        res.json({
            msg:response
        })
    }
    console.log(response)
}