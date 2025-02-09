
import { Router } from "express";
import { authMiddleware } from "../middleware/auth.js";
import { about } from "../controller/about.js";

export let aboutRouter = Router();

aboutRouter.post("/",authMiddleware,about)
