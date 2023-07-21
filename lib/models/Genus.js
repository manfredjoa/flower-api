import mongoose from "mongoose";

const Schema = mongoose.Schema;

const genusSchema = new Schema({
  genusName: String,
  familyName: String,
  description: String,
  image: String,
  species: [String],
});

export default mongoose.model("genuses", genusSchema);
