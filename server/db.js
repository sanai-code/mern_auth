import mongoose, { Schema } from "mongoose";
import { boolean } from "zod";

let userSchema = new Schema({
    username:String,
    email:{type:String,},
    password:String,
    isAdmin:Boolean
})
let contactSchema = new Schema({
    username:{type:String},
    email:{type:String,required:true},
    phone:{type:Number},
    message:{type:String,required:true}
})
let couseSchema = new Schema({
    title:String,
    instructor:String
})

export let usermodel = mongoose.model('user',userSchema)
export let contactModel=  mongoose.model('contact',contactSchema)
export let couseModel =  mongoose.model('course',couseSchema)