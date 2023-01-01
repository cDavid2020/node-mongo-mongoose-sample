import { Schema, model } from "mongoose";

export default model(
  "Score",
  new Schema({
    gradeType: { type: String, enum: ["HW", "Quiz", "Test"], default: "HW" },
    name: { type: String, required: true },
    earned: { type: Number, required: true },
    possible: { type: Number, required: true },
  })
);
