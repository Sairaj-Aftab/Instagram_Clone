import User from "../models/user.js";
import fs from "fs";
import createError from "../utility/createError.js";
import { hashPassword, verifyPassword } from "../utility/hash.js";
import { getRandomCode } from "../utility/mathRandom.js";
import { sendAccountActivateMail } from "../utility/sendMail.js";
import { sendOTP } from "../utility/sendSMS.js";
import { createToken, verifyToken } from "../utility/token.js";
import { isEmail, isPhoneNumber } from "../utility/validates.js";

export const register = async (req, res, next) => {
  try {
    const { auth, full_name, user_name, password } = req.body;

    if (!auth || !full_name || !user_name || !password) {
      next(createError(404, "All fields are required"));
    } else {
      let emailData = null;
      let phoneNumberData = null;

      if (isEmail(auth)) {
        emailData = auth;
        const usedEmail = await User.findOne({ email: auth });
        if (usedEmail) {
          next(createError(404, "Email already exist"));
        } else {
          const usedUserName = await User.findOne({ user_name: user_name });
          if (usedUserName) {
            next(createError(404, "User name already exist"));
          } else {
            // Generate Account Activate Code
            let accountActivationCode = getRandomCode(10000, 99999);
            const checkCode = await User.findOne({
              access_token: accountActivationCode,
            });
            if (checkCode) {
              accountActivationCode = getRandomCode(10000, 99999);
            }
            // Crerate Data
            const user = await User.create({
              email: emailData,
              phone: phoneNumberData,
              full_name,
              user_name,
              password: hashPassword(password),
              access_token: accountActivationCode,
            });
            if (user) {
              // Create Token
              const token = createToken({ id: user.id }, "30d");

              // Send Mail to user for activation account
              sendAccountActivateMail(user.email, {
                name: user.full_name,
                email: user.email,
                link: `${process.env.APP_URL}3000/user/activate-account/${token}`,
                code: accountActivationCode,
              });
              res.status(200).cookie("auth", user.email).json({
                message: "User successfully created",
                user: user,
              });
            }
          }
        }
      } else if (isPhoneNumber(auth)) {
        phoneNumberData = auth;
        const usedNumber = await User.findOne({ phone: auth });
        if (usedNumber) {
          next(createError(404, "Phone number already exist"));
        } else {
          const usedUserName = await User.findOne({ user_name: user_name });
          if (usedUserName) {
            next(createError(404, "User name already exist"));
          } else {
            // Generate Account Activate Code
            let accountActivationCode = getRandomCode(10000, 99999);
            const checkCode = await User.findOne({
              access_token: accountActivationCode,
            });
            if (checkCode) {
              accountActivationCode = getRandomCode(10000, 99999);
            }
            // Crerate Data
            const user = await User.create({
              email: emailData,
              phone: phoneNumberData,
              full_name,
              user_name,
              password: hashPassword(password),
              access_token: accountActivationCode,
            });
            if (user) {
              // Create Token
              const token = createToken({ id: user.id }, "30d");

              // Send Mail to user for activation account
              sendOTP(
                user.phone,
                `Hi ${user.full_name}. Your activation code is ${accountActivationCode}`
              );
              res.status(200).json({
                message: "User successfully created",
                user: user,
              });
            }
          }
        }
      } else {
        next(createError(404, "Invalid email or phone number"));
      }
    }
  } catch (error) {
    next(error);
  }
};

// User Login
// post //api/v1/user/login
export const login = async (req, res, next) => {
  try {
    const { auth, password } = req.body;

    if (!auth || !password) {
      next(createError(404, "All fields are required"));
    } else {
      if (isEmail(auth)) {
        const userEmail = await User.findOne({ email: auth });
        if (!userEmail) {
          next(createError(404, `Email doesn't match`));
        } else {
          if (!verifyPassword(password, userEmail.password)) {
            next(createError(404, "Wrong password"));
          } else {
            if (userEmail.isActivate === false) {
              next(createError(404, "Please verify account"));
            } else {
              const token = createToken({ id: userEmail._id }, "365d");
              res.status(200).cookie("authToken", token).json({
                message: "Successfully login",
                user: userEmail,
                token: token,
              });
            }
          }
        }
      } else if (isPhoneNumber(auth)) {
        const userPhone = await User.findOne({ phone: auth });
        if (!userPhone) {
          next(createError(404, `Phone number doesn't match`));
        } else {
          if (!verifyPassword(password, userPhone.password)) {
            next(createError(404, "Wrong password"));
          } else {
            const token = createToken({ id: userPhone._id }, "365d");
            res.status(200).cookie("authToken", token).json({
              message: "Successfully login",
              user: userPhone,
              token: token,
            });
          }
        }
      } else {
        next(createError(404, "Invalid email or phone number"));
      }
    }
  } catch (error) {
    next(error);
  }
};

// Loged In User
export const logedInUser = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      next(createError(404, "Token not found"));
    } else {
      const token = bearerToken.split(" ")[1];
      // User find by Token Verify
      const user = verifyToken(token);

      if (!user) {
        next(createError(404, "Invalid user"));
      } else {
        const logedInUser = await User.findById(user.id);

        if (!logedInUser) {
          next(createError(404, "User not found"));
        } else {
          res.status(200).json({
            message: "User stable",
            user: logedInUser,
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

// Register user activate by link from email
export const userActivateByLink = async (req, res, next) => {
  try {
    const { token } = req.params;
    if (!token) {
      next(createError(404, "Invalid URL"));
    } else {
      const validToken = verifyToken(token);
      if (!validToken) {
        next(createError(404, "User not found"));
      } else {
        const account = await User.findById(validToken.id);

        if (account.isActivate == true) {
          next(createError(404, "User already activated"));
        } else {
          await User.findByIdAndUpdate(validToken.id, {
            isActive: true,
            access_token: "",
          });

          res.status(200).json({
            message: "User successfully activated",
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

// Register user activate by OTP Code
export const userActivateByOTPcode = async (req, res, next) => {
  try {
    const { auth, code } = req.body;
    if (!code) {
      next(createError(404, "Please put the OTP"));
    } else {
      const user = await User.findOne().or([{ email: auth }, { phone: auth }]);

      if (!user) {
        next(createError(404, "User not found"));
      } else {
        if (user.isActive == true) {
          next(createError(404, "User already activated"));
        } else if (user.access_token != code) {
          next(createError(404, "OTP is not matching"));
        } else {
          await User.findByIdAndUpdate(user.id, {
            isActive: true,
            access_token: "",
          });
          res.status(200).json({
            message: "User successfully activated",
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

//Reset forgot password
export const resetForgotPassword = async (req, res, next) => {
  try {
    const { auth } = req.body;
    if (!auth) {
      next(createError(404, ""));
    } else {
    }
  } catch (error) {
    next(error);
  }
};

// Change Profile Picture
export const changeProfilePic = async (req, res, next) => {
  try {
    const { id } = req.params;

    // fs.unlink(`api/public/profile/${filename}`);
    const user = await User.findByIdAndUpdate(
      id,
      {
        profile_photo: req.file.filename,
      },
      { new: true }
    );
    if (user) {
      res.status(200).json({
        message: "Successfully updated",
        filename: req.file.filename,
      });
    }
  } catch (error) {
    return next(error);
  }
};

// Delete Profile Picture
export const deleteProfilePic = async (req, res, next) => {
  try {
    const { filename, id } = req.params;
    if (filename) {
      fs.unlink(`api/public/profile/${filename}`, (err) => {
        if (err) {
          next(createError(404, "File is not found"));
        } else {
          res.status(200).json({
            message: "Successfully deleted",
          });
        }
      });
      await User.findByIdAndUpdate(id, { profile_photo: null }, { new: true });
    } else {
      next(createError(404, "File is not found"));
    }
  } catch (error) {
    next(error);
  }
};

// Account Edit
export const editAccount = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const usedUserName = await User.findOne({
      _id: { $ne: id },
      user_name: data.user_name,
    });
    const usedEmail = await User.findOne({
      _id: { $ne: id },
      email: data.email,
    });
    const usedPhone = await User.findOne({
      _id: { $ne: id },
      phone: data.phone,
    });

    if (usedUserName) {
      next(createError(404, "User name already taken"));
    } else if (usedEmail) {
      next(createError(404, "Email already exist"));
    } else if (usedPhone) {
      next(createError(404, "Phone already exist"));
    } else {
      const updateData = await User.findByIdAndUpdate(id, data, { new: true });
      if (updateData) {
        res.status(200).json({
          message: "Successfully edited",
          user: updateData,
        });
      } else {
        next(createError(404, "Failed to edited"));
      }
    }
  } catch (error) {
    return next(error);
  }
};

// Get All User
export const getAllUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.find({ _id: { $ne: id } }).select("-password");
    if (user) {
      res.status(200).json({
        message: "Get all user",
        user: user,
      });
    }
  } catch (error) {
    next(error);
  }
};

// Get Single User
export const getSingleUser = async (req, res, next) => {
  try {
    const { userName } = req.params;

    const user = await User.findOne({ user_name: userName });

    if (user) {
      res.status(200).json({
        message: "Get single user data",
        user: user,
      });
    } else {
      next(createError(404, "User not found"));
    }
  } catch (error) {
    next(error);
  }
};

// Following
export const follow = async (req, res, next) => {
  try {
    const { me, other } = req.params;
    const meId = await User.findById(me);
    const otherId = await User.findById(other);
    if (meId.following != other) {
      await meId.updateOne({
        $push: { following: other },
      });
    }
    if (otherId.followers != me) {
      await otherId.updateOne({
        $push: { followers: me },
      });
    }
    const user = await User.findById(me);
    const otherUser = await User.findById(other);
    res.status(200).json({
      user: user,
      otherUser: otherUser,
    });
  } catch (error) {
    next(error);
  }
};

// Unfollowing
export const unFollow = async (req, res, next) => {
  try {
    const { me, other } = req.params;
    const meId = await User.findById(me);
    const otherId = await User.findById(other);
    await meId.updateOne({
      $pull: { following: other },
    });

    await otherId.updateOne({
      $pull: { followers: me },
    });

    const user = await User.findById(me);
    const otherUser = await User.findById(other);
    res.status(200).json({
      user: user,
      otherUser: otherUser,
    });
  } catch (error) {
    next(error);
  }
};

// Unfollowing
export const removeFollower = async (req, res, next) => {
  try {
    const { me, other } = req.params;
    const meId = await User.findById(me);
    const otherId = await User.findById(other);

    await meId.updateOne({
      $pull: { followers: other },
    });

    await otherId.updateOne({
      $pull: { following: me },
    });

    const user = await User.findById(me);
    const otherUser = await User.findById(other);
    res.status(200).json({
      user: user,
      otherUser: otherUser,
    });
  } catch (error) {
    next(error);
  }
};
