import { Router } from "express";
import familiesRoutes from "./families.js";
import generaRoutes from "./genera.js";
import speciesRoutes from "./species.js";

const router = Router();

router.get("/", (req, res) => {
  res.send(
    "Welcome to the best Plants API! You can start with the /families , /genera , or /species endpoints. Please refer to the CRUD Functionality in the README for more endpoints!"
  );
});

router.use("/families", familiesRoutes);
router.use("/genera", generaRoutes);
router.use("/species", speciesRoutes);

export default router;
