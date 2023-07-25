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

    const upperCaseSpeciesName =
      speciesName.charAt(0).toUpperCase() + speciesName.slice(1);

    const oneSpecies = await Species.find({
      speciesName: upperCaseSpeciesName,
    });

    if (oneSpecies) {
      return res.json(oneSpecies);
    }
    res.status(404).json({ error: "Species not found." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getOneSpeciesById = async (req, res) => {
  try {
    const { id } = req.params;
    const oneSpecies = await Species.find({ _id: id });

    if (oneSpecies.length === 0) {
      return res.status(404).json({ error: "Species not found." });
    } else {
      return res.json(oneSpecies);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getOneSpeciesByCommonName = async (req, res) => {
  try {
    const { commonName } = req.params;
    const oneSpecies = await Species.find({ commonName: commonName });

    if (oneSpecies.length === 0) {
      return res.status(404).json({ error: "Species not found." });
    } else {
      return res.json(oneSpecies);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const addCommonNameParameter = (req, res) => {
  return res.json({ error: "Please add a common name at end of url." });
};

export const addIdParameter = (req, res) => {
  return res.json({ error: "Please add an id at end of url." });
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
