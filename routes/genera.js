import { Router } from "express";
import * as controllers from "../controllers/genera.js";

const router = Router();

router.get("/id/", controllers.addIdParameter);
router.get("/", controllers.getGenera);
router.get("/:genusName", controllers.getGenusByName);
router.get("/id/:id", controllers.getGenusById);
router.get("/family/:familyName", controllers.getGeneraByFamily);
router.post("/", controllers.createGenus);
router.put("/edit/:genusName", controllers.updateGenus);
router.delete("/delete/:genusName", controllers.deleteGenus);

export default router;
