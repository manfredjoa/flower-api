import { Router } from "express";
import * as controllers from "../controllers/genera.js";

const router = Router();

router.get("/", controllers.getGenera);
router.get("/:genusName", controllers.getGenusByName);
router.get("/id/:id", controllers.getGenusById);
router.post("/", controllers.createGenus);
router.put("/edit/:genusName", controllers.updateGenus);
router.delete("/delete/:genusName", controllers.deleteGenus);

export default router;
