import { Router } from "express";
import * as controllers from "../controllers/plants.js";

const router = Router();

router.get("/", controllers.getPlants);

export default router;
