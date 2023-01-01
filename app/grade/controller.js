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
    // Using 'exec' is optional, but gives better stack traces
    // https://mongoosejs.com/docs/promises.html#should-you-use-exec-with-await
    const student = await Grade.findById(studentId).exec();
    student.scores.push(score);
    return student.save();
  },
};
