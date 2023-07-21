import { Router } from "express";
import familiesRoutes from "./families.js";
import generaRoutes from "./genera.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to the best (in development) Plants API!");
});

router.use("/families", familiesRoutes);
router.use("/genera", generaRoutes);

export default router;
