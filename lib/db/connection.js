import mongoose from "mongoose";

const DB_URL = process.env.DB_URL || "mongodb://localhost/plants";

mongoose.set("returnOriginal", false);

mongoose.connect(DB_URL).catch((err) => {
  console.log(`Error connecting to MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB.");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

export default mongoose.connection;
