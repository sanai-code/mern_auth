import { usermodel } from "../db.js"
import bcypt from "bcrypt"
import jwt from "jsonwebtoken"
import { z ,ZodError} from "zod"
let usernameSchema = z.string().min(4).max(23);
let passwordSchema = z.string().min(6, { message: "password must be 6 or more characters long" }).max(45);
let emailSchema = z.string().email();
export const register = async (req, res) => {
    try {
        let username = usernameSchema.parse(req.body.username)
        let email = emailSchema.parse(req.body.email)
        let password = passwordSchema.parse(req.body.password)
        // let { username, email, password } = req.body
        let findIntoDatabase = await usermodel.findOne({
            email
        })
        console.log(findIntoDatabase)
        if (findIntoDatabase) {
            res.json({
                msg: 'user already exitst'
            })
        }
        else {

            // await because hassing password take time
            let hashPassword = await bcypt.hash(password, 5)
            let response = await usermodel.create({
                username,
                email,
                password: hashPassword,
                isAdmin:false
            })
            let token = jwt.sign({id:response._id},process.env.USER_JWT_SECRET)
            res.json({
                token: token
            })
        }
    } catch (error) {
        if(error instanceof ZodError){
            res.json({
                msg:error.issues[0].message,
                code:error.issues[0].code
            })
        }else{
            res.json({
                msg: 'some went wrogn'
            })

        }
    }

}
// user login
export const login = async (req, res) => {
    let { email, password } = req.body
    try {
        let response = await usermodel.findOne({
            email
        })
        if (!response) {
            res.status(400).json({
                msg: "invalid credentials"
            })
        }else{
            const comparePassword = await bcypt.compare(password, response.password)
            if (comparePassword) {
                let token = jwt.sign({ id: response._id }, process.env.USER_JWT_SECRET)
                res.json({
                    token: token
                })
            } else {
                res.status(401).json({
                    msg: 'email and password are not valid'
                })
            }

        }

    } catch (error) {
        res.status(500).json({
            msg: 'inter nal error'
        })
    }
}