import Genus from "../models/Genus.js";

export const getGenera = async (req, res) => {
  try {
    let genera = await Genus.find();
    res.json(genera);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
