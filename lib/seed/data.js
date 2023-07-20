import db from "../db/connection.js";
import Family from "../models/Family.js";
import Plant from "../models/Plant.js";
import familyData from "../db/families.json" assert { type: "json" };
import plantData from "../db/plants.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();
  await Family.create(familyData);
  await Plant.create(plantData);
  console.log("Families created.");
  await db.close();
};

insertData();
