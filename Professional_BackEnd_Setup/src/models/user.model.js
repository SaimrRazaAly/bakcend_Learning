import mongoose, { Schema } from "mongoose";

const userSchema = Schema(
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
    fullname: {
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

export const User = mongoose.model("User", userSchema);
