import mongoose from "mongoose";

const Schema = mongoose.Schema;

const familySchema = new Schema(
  {
    familyName: String,
    derivation: String,
    meaning: String,
    orderName: String,
    uses: [String],
    description: String,
    genera: [
      {
        type: Schema.Types.String,
        ref: "genuses",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("families", familySchema);
