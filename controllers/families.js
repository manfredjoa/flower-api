import Family from "../models/Family.js";

export const getFamilies = async (req, res) => {
  try {
    const families = await Family.find();
    return res.json(families);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getFamily = async (req, res) => {
  try {
    const { familyName } = req.params;

    const upperCaseFamilyName =
      familyName.charAt(0).toUpperCase() + familyName.slice(1);

    const family = await Family.find({
      familyName: upperCaseFamilyName,
    });

    if (family.length === 0) {
      res.status(404).json({ message: "Family not found." });
    } else {
      return res.json(family);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getFamilyById = async (req, res) => {
  try {
    const { id } = req.params;
    const family = await Family.find({ _id: id });

    if (family.length === 0) {
      res.status(404).json({ message: "Family not found." });
    } else {
      return res.json(family);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const addIdParameter = (req, res) => {
  return res.json({ error: "Please add an id at end of url." });
};

export const createFamily = async (req, res) => {
  const family = new Family(req.body);
  await family.save();
  res.status(201).json(family);
};

export const updateFamily = async (req, res) => {
  const { familyName } = req.params;
  const family = await Family.findOneAndUpdate(
    { familyName: familyName },
    req.body
  );
  res.status(201).json(family);
};

export const deleteFamily = async (req, res) => {
  try {
    const { familyName } = req.params;
    const deleted = await Family.findOneAndDelete({ familyName: familyName });

    if (deleted) {
      return res.status(200).send("Family deleted.");
    }
    throw new Error("Family not found.");
  } catch {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
