import jwt from "jsonwebtoken";
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc    Auth User & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
  });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    // set JWT as HTTP-only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register User & get token
// @route   POST /api/users
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc    Logout the user & clear cookie
// @route   POST /api/users/logout
// @access  Private

const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get User Profile");
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update User Profile");
});

// @desc    Get all users profile
// @route   GET /api/users/profile
// @access  Private/admin

const getUsers = asyncHandler(async (req, res) => {
  res.send("get all users");
});

// @desc    Get users by ID
// @route   GET /api/users/:id
// @access  Private/admin

const getUsersByID = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc    Delete user profile
// @route   DELETE /api/users/:id
// @access  Private/admin

const deleteUser = asyncHandler(async (req, res) => {
  res.send("deleteUser");
});

// @desc    Update user profile
// @route   PUT /api/users/:id
// @access  Private/admin

const updateUser = asyncHandler(async (req, res) => {
  res.send("updateUser");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUsersByID,
  deleteUser,
  updateUser,
};
