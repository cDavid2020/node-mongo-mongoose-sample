import { Schema, model } from "mongoose";
import Score from "../score/Score.js";

export default model(
  "Grade",
  new Schema({
    name: { type: String, required: true, unique: true },
    scores: [Score.schema],
  })
);
