import mongoose from "mongoose";

const userModel = mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
      trim: true,
    },
    user_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    profile_photo: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      default: "",
    },
    web_link: {
      type: String,
      default: "Website",
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Prefer not to say"],
    },
    posts: {
      type: Array,
      default: [],
    },
    story: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    access_token: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Export
export default mongoose.model("User", userModel);
