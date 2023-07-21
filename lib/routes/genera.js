import { Router } from "express";
import * as controllers from "../controllers/genera.js";

const router = Router();

router.get("/", controllers.getGenera);

export default router;
