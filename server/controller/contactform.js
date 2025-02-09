import { z, ZodError } from "zod"
import { contactModel } from "../db.js";
let usernameSchema = z.string().min(4).max(23);
let messageSchema = z.string().min(10, { message: "message must be 25 or more characters long" }).max(5000);
let emailSchema = z.string().email();
export async function contactForm(req, res) {
    try {
        let username = usernameSchema.parse(req.body.username)
        let email = emailSchema.parse(req.body.email)
        let message = messageSchema.parse(req.body.message)
        console.log(username,email,message)
        let response = await contactModel.create({
            username,
            email,
            message
        })
        res.json({
            msg: response
        })
    } catch (error) {
        console.log(error)
        if (error instanceof ZodError) {
            res.json({
                msg: error.issues[0].message,
                msg: error.issues[0].code
            })
        } else {
            res.json({
                msg: "unexprcted error"
            })

        }
    }
}