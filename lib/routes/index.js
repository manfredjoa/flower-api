import { Router } from "express";
// import familiesRoutes from "./families.js";
// import plantsRoutes from "./plants.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to the best (in development) Plants API!");
});

// router.use("/families", familiesRoutes);
// router.use("/plants", plantsRoutes);

export default router;
