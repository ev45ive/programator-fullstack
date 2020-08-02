import mongoose from "mongoose";

export const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { 
    type: String, required: true, 
    // hide password from results
    select: false
  },
  avatarURL: String,
  active: { type: Boolean, default: false },
});

userSchema.methods.activate = function (cb) {
  this.active = true;
  return this.save();
};

export const User = mongoose.model("User", userSchema);
