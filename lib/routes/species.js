import Router from "express";
import * as controllers from "../controllers/species.js";

const router = Router();

router.get("/common-name/", controllers.addCommonNameParameter);
router.get("/id/", controllers.addIdParameter);
router.get("/", controllers.getAllSpecies);
router.get("/:speciesName", controllers.getOneSpecies);
router.get("/id/:id", controllers.getOneSpeciesById);
router.get("/common-name/:commonName", controllers.getOneSpeciesByCommonName);
router.get("/genus/:genusName", controllers.getSpeciesByGenus);
router.post("/", controllers.createOneSpecies);
router.put("/edit/:speciesName", controllers.updateOneSpecies);
router.delete("/delete/:speciesName", controllers.deleteOneSpecies);

export default router;
