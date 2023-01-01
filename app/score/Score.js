import { Schema, model } from "mongoose";

export default model(
  "Score",
  new Schema({
    type: String,
    name: String,
    earned: Number,
    possible: Number,
  })
);
