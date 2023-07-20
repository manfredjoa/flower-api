import { Router } from "express";
import * as controllers from "../controllers/families.js";

const router = Router();

router.get("/", controllers.getFamilies);

export default router;
