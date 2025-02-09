import { Router } from "express";
import { contactForm } from "../controller/contactform.js";

export let contactRouter = Router();

contactRouter.post("/contact",contactForm)