import mongoose from "mongoose";

const SMSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    minLength: [3, " Name must contain at least 3 characters!"],
    maxLength: [20, " Name cannot exceed 20 characters!"],
  },
  UID: {
    type: String,
    required: true,
    minLength: [10, "Enter correct UID "],
    maxLength: [10, "Enter correct UID "],
  },
  Section: {
    type: Number,
    required: true,
    minLength: [3, "Enter correct Section "],
    maxLength: [3, "Enter correct Section "],
  },
  MarksOneSub: {
    type: Number,
    required: true,
    minLength: 0,
    maxLength: 100,
  },
  MarksSecSub: {
    type: Number,
    required: true,
    minLength: 0,
    maxLength: 100,
  },
  MarksThirSub: {
    type: Number,
    required: true,
    minLength: 0,
    maxLength: 100,
  },
});

const StudentMarks = mongoose.model("StudentMarks", SMSchema);
export default StudentMarks;
