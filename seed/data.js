import db from "../db/connection.js";
import Family from "../models/Family.js";
import Genus from "../models/Genus.js";
import Species from "../models/Species.js";
import familyData from "../db/families.json" assert { type: "json" };
import genusData from "../db/genera.json" assert { type: "json" };
import speciesData from "../db/species.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();
  await Family.create(familyData);
  await Genus.create(genusData);
  await Species.create(speciesData);
  console.log("Families, genera, and species created.");
  await db.close();
};

insertData();
