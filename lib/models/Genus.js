import mongoose from "mongoose";

const Schema = mongoose.Schema;

const genusSchema = new Schema(
  {
    genusName: String,
    familyName: String,
    description: String,
    species: [
      {
        type: Schema.Types.String,
        ref: "species",
        default: "N/A",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("genuses", genusSchema);
