import expess from "express"
import { userRouter } from "./router/user.js";
import mongoose from "mongoose"
import 'dotenv/config'
import { contactRouter } from "./router/contact.js";
import cors from "cors"
import { aboutRouter } from "./router/About.js";
import { adminRouter } from "./router/admin.js";
let app = expess();
const PORT = 3000;

var corsOptions = {
    origin:process.env.FRONTEND_URL,
    optionsSuccessStatus: 200 
  }
app.use(cors(corsOptions))
app.use(expess.json())
app.use("/api/v1",userRouter)
app.use("/contact",contactRouter)
app.use("/about",aboutRouter)
app.use("/api/v1/admin",adminRouter)

async function main(){
    await mongoose.connect(process.env.DATABASE_URL)
    app.listen(PORT,()=>{
        console.log('listning on '+ PORT)
    })
}
main();