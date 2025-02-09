import { Router } from "express";
import { login, register } from "../controller/register.js";
import { Profile } from "../controller/profile.js";
import { authMiddleware } from "../middleware/auth.js";
export const userRouter = Router();

userRouter.post('/register',register)
userRouter.post("/login",login) 
userRouter.get("/me",authMiddleware,Profile)