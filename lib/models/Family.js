import mongoose from "mongoose";

const Schema = mongoose.Schema;

const familySchema = new Schema({
  familyName: String,
  derivation: String,
  meaning: String,
  orderName: String,
  uses: [String],
  description: String,
  plants: [String],
});
// { type: Schema.Types.ObjectId, ref: "plants" }
// plants will be its own model
export default mongoose.model("families", familySchema);
