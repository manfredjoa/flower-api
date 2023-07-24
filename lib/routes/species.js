import Router from "express";
import * as controllers from "../controllers/species.js";

const router = Router();

router.get("/", controllers.getAllSpecies);
router.get("/:speciesName", controllers.getOneSpecies);
router.get("/id/:id", controllers.getOneSpeciesById);
router.post("/", controllers.createOneSpecies);
router.put("/edit/:speciesName", controllers.updateOneSpecies);
router.delete("/delete/:speciesName", controllers.deleteOneSpecies);

export default router;
