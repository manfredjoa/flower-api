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

export const getGenus = async (req, res) => {
  try {
    const { genusName } = req.params;
    const genus = await Genus.find({ genusName: genusName });

    if (genus) {
      return res.json(genus);
    }
    res.status(404).json({ message: "Genus not found." });
  } catch {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createGenus = async (req, res) => {
  const genus = new Genus(req.body);
  await genus.save();
  res.status(201).json(genus);
};

export const updateGenus = async (req, res) => {
  const { genusName } = req.params;
  const genus = await Genus.findOneAndUpdate(
    { genusName: genusName },
    req.body
  );
  res.status(201).json(genus);
};

export const deleteGenus = async (req, res) => {
  try {
    const { genusName } = req.params;
    const deleted = await Genus.findOneAndDelete({ genusName: genusName });

    if (deleted) {
      return res.status(200).send("Genus deleted.");
    }
    throw new Error("Genus not found.");
  } catch {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
