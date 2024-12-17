import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new Schema(
  {
    // we need id for bescause it is messing
    // id: {
    //   type: Number,
    // },
    username: {
      type: String,
      requried: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    email: {
      type: String,
      requried: true,
      trim: true,
      lowercase: true,
    },
    fullName: {
      type: String,
      requried: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //Cloudnary par file upload karnay say url data hay URL
      requried: true,
    },
    coverImage: {
      type: String,
    },

    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      requried: [true, "password is requried"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password); //result comes in true or false
};
userSchema.methods.generateAccessToken = function () {
 return jwt.sign({
    _id: this._id,
    username: this.username,
    email: this.email,
    fullname: this.fullname,
  },
  process.env.ACCESS_TOKEN_SECRECT,
{
 expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
}
);

};
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign({
    _id: this._id,
  },
  process.env.REFRESH_TOKEN_SECRECT,
{
 expiresIn : process.env.REFRESH_TOKEN_EXPIRY,
}
);

return generatingProcess;
};
export const User = mongoose.model("User", userSchema);
