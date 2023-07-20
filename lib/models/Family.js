import mongoose from "mongoose";

const Schema = mongoose.Schema;

const familySchema = new Schema({
  familyName: String,
  derivation: String,
  meaning: String,
  orderName: String,
  uses: [String],
  description: String,
  lowerClassifications: [String],
});
// { type: Schema.Types.ObjectId, ref: "lowerClassifications" }
// lowerClassifications will be its own model
export default mongoose.model("families", familySchema);
