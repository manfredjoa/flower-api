import db from "../db/connection.js";
import Family from "../models/Family.js";
import familyData from "../db/families.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();
  await Family.create(familyData);
  console.log("Families created.");
  await db.close();
};

insertData();
