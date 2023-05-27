import express from "express";
import path from "path";
import multer from "multer";
import {
  changeProfilePic,
  deleteProfilePic,
  editAccount,
  follow,
  getAllUser,
  getSingleUser,
  logedInUser,
  login,
  register,
  removeFollower,
  unFollow,
  userActivateByLink,
  userActivateByOTPcode,
} from "../controllers/user.js";
const router = express.Router();
const __dirname = path.resolve();

// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/api/public/profile"));
  },
  filename: function (req, file, cb) {
    const { id } = req.params;
    cb(null, Date.now() + id + "-" + file.originalname);
  },
});

const uploadProfile = multer({ storage: storage }).single("profile");
// Api Routes
router.post("/register", register);
router.post("/login", login);
router.get("/me", logedInUser);
router.get("/all-user/:id", getAllUser);
router.get("/get-single-user/:userName", getSingleUser);
router.put("/following/:me/:other", follow);
router.put("/unfollow/:me/:other", unFollow);
router.put("/remove-follower/:me/:other", removeFollower);
router.get("/activate-account/:token", userActivateByLink);
router.post("/activate-account", userActivateByOTPcode);
router.put("/account-edit/:id", editAccount);
router.put("/change-profile-photo/:id", uploadProfile, changeProfilePic);
router.delete("/delete-profile-photo/:filename/:id", deleteProfilePic);

export default router;
