import Family from "../models/Family.js";

export const getFamilies = async (req, res) => {
  try {
    let families = await Family.find();
    res.json(families);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
