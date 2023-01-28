import { Schema, model } from "mongoose";

const groupSchema = new Schema(
  {
    gNumber: {
      type: String,
    },
    medium: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Group", groupSchema);
