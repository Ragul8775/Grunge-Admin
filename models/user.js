import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exist!"],
    required: [true, "Please provide your Email address"],
  },
  username: {
    type: String,
    required: [true, "Username is Required!!"],
  
  },
  image: {
    type: String,
  },
});
const User = models.User || model("User", userSchema);
export default User;