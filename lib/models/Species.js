import mongoose from "mongoose";

const Schema = mongoose.Schema;

const speciesSchema = new Schema(
  {
    speciesName: String,
    commonName: {
      type: String,
      default: "",
    },
    genusName: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("species", speciesSchema);
