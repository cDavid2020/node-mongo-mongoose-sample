import mongoose from "mongoose";
import config from "../config.js";
import Grade from "./Grade.js";

mongoose.set("strictQuery", false);
mongoose.connect(config.getMongoUrl("gradebook"));

export default {
  createStudent(name) {
    return Grade.create({ name, scores: [] });
  },
  async addScore(studentId, score) {
    const student = await Grade.findById(studentId);
    student.scores.push(score);
    return student.save();
  },
};
