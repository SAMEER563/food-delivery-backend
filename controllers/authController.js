import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Secret key for JWT (keep this in an environment variable in production)
const JWT_SECRET = process.env.JWT_SECRET || "hjggdfjshdjkbahdfl";

export const register = async (req, res) => {
  const { username, password, confirmPassword } = req.body;

  // Validate that password and confirmPassword match
  if (password !== confirmPassword) {
    return res.status(400).json({ msg: "Passwords do not match" });
  }

  try {
    // Check if user already exists by username
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "Username already exists" });
    }

    // Create a new user object
    user = new User({
      username,
      password,
      confirmPassword,
    });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save the user to the database
    await user.save();

    // Generate a JWT token
    const payload = {
      userId: user._id, // Include the user ID in the payload
    };

    // Sign the JWT with a secret key
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" }); // Token expires in 1 hour

    // Send a success response with the token
    res.status(201).json({
      message: "User created successfully",
      success: true,
      token, // Send the JWT token to the client
    });
  } catch (error) {
    // Handle any errors
    res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "Invalid username or password" });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid username or password" });
    }

    // Generate a JWT token
    const payload = {
      userId: user._id, // Include the user ID in the payload
    };

    // Sign the JWT with a secret key
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
    console.log("Generated Token:", token);

    // Send the response with the token
    res.status(200).json({
      message: "Login successful",
      success: true,
      token, // Send the JWT token to the client
    });
  } catch (error) {
    // Handle any errors
    res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};

export const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    let user = await User.findOne({ username });
    if (!user || !user.isAdmin) {
      return res.status(400).json({ msg: "Invalid admin credentials" });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid admin credentials" });
    }

    // Generate a JWT token for admin
    const payload = {
      userId: user._id,
      isAdmin: true, // Indicate that this token is for an admin
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    // Send the response with the token
    res.status(200).json({
      message: "Admin login successful",
      success: true,
      token, // Send the JWT token to the client
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};


// Logout function 

export const logout = async (req, res) => {
  // Optionally, add server-side token invalidation logic if needed
  res.status(200).json({ message: "Logout successful" });
};


// Get all users

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch users", error: error.message });
  }
}

