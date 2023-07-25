import Genus from "../models/Genus.js";

export const getGenera = async (req, res) => {
  try {
    const genera = await Genus.find();
    return res.json(genera);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getGenusByName = async (req, res) => {
  try {
    const { genusName } = req.params;

    const upperCaseGenusName =
      genusName.charAt(0).toUpperCase() + genusName.slice(1);

    const genus = await Genus.find({ genusName: upperCaseGenusName });

    if (genus.length === 0) {
      res.status(404).json({ message: "Genus not found." });
    } else {
      return res.json(genus);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getGenusById = async (req, res) => {
  try {
    const { id } = req.params;
    const genus = await Genus.find({ _id: id });

    if (genus.length === 0) {
      res.status(404).json({ message: "Genus not found." });
    }
    return res.json(genus);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const addIdParameter = (req, res) => {
  return res.json({ error: "Please add an id at end of url." });
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
