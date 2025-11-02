import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  name: String,
  designation: String,
  department: String,
  subjects_handled: [String],
  email: String,
  phone: String,
  office_room: String
});

export default mongoose.model("Faculty", facultySchema);
