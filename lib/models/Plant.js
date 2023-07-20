import mongoose from "mongoose";

const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: String,
  family: String,
  genus: String,
  species: String,
  description: String,
  funFact: String,
  image: String,
});

export default mongoose.model("plants", plantSchema);
