import { Schema, Document, Model, model } from "mongoose";

import Joi from "joi";

interface IUser extends Document {
  name: string;
  username: string;
  role: "user" | "admin";
  password: string;
}

const validateUser = (body: {
  name: string;
  username: string;
  password: string;
}) => {
  const joiSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).required(),
  });
  return joiSchema.validateAsync(body);
};

const userSchema = new Schema(
  {
    name: {
      type: String,
      min: 3,
      max: 30,
      required: true,
    },
    username: {
      type: String,
      min: 3,
      max: 30,
      required: true,
    },
    role: { type: String, required: true, default: "user" },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> = model("User", userSchema);

export { User, IUser, validateUser };
