import Species from "../models/Species.js";

export const getAllSpecies = async (req, res) => {
  try {
    const allSpecies = await Species.find();
    return res.json(allSpecies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getOneSpecies = async (req, res) => {
  try {
    const { speciesName } = req.params;
    const oneSpecies = await Species.find({ speciesName: speciesName });

    if (oneSpecies) {
      return res.json(oneSpecies);
    }
    res.status(404).json({ error: "Species not found. " });
  } catch {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getOneSpeciesById = async (req, res) => {
  try {
    const { id } = req.params;
    const oneSpecies = await Species.find({ _id: id });

    if (oneSpecies) {
      return res.json(oneSpecies);
    }
    res.status(404).json({ error: "Species not found." });
  } catch {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createOneSpecies = async (req, res) => {
  const oneSpecies = new Species(req.body);
  await oneSpecies.save();
  res.status(201).json(oneSpecies);
};

export const updateOneSpecies = async (req, res) => {
  const { speciesName } = req.params;
  const oneSpecies = Species.findOneAndUpdate(
    { speciesName: speciesName },
    req.body
  );
  res.status(201).json(oneSpecies);
};

export const deleteOneSpecies = async (req, res) => {
  try {
    const { speciesName } = req.params;
    const deleted = Species.findOneAndDelete({ speciesName: speciesName });

    if (deleted) {
      return res.status(200).send("Species deleted.");
    }
    throw new Error("Species not found");
  } catch {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
