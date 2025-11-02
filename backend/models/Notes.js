import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  title: String,
  subject: String,
  semester: String,
  pdfLink: String
});

export default mongoose.model("Notes", notesSchema);
