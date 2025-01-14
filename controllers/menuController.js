import path from 'path';
import multer from 'multer';
import Menu from "../models/MenuModel.js";

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the destination where files will be uploaded
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    // Set the filename (we'll use the original filename for simplicity)
    cb(null, Date.now() + path.extname(file.originalname)); // Ensure the filename is unique by adding a timestamp
  },
});

const upload = multer({ storage: storage });

// Add a new menu item (with image upload)
export const addMenuItem = async (req, res) => {
  const { name, category, price, availability, ingredients, description } = req.body;
  const image = req.file; // The uploaded image will be available in req.file

  if (!image) {
    return res.status(400).json({ message: "Image file is required" });
  }

  try {
    const newMenuItem = new Menu({
      name,
      category,
      price,
      availability,
      image: image.filename, // Save only the filename
      ingredients,
      description,
    });

    await newMenuItem.save();
    res.status(201).json({ message: "Menu item added successfully", menuItem: newMenuItem });
  } catch (error) {
    res.status(400).json({ message: "Error adding menu item", error });
  }
};


// Update a menu item (with image upload)
export const updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { name, category, price, availability, ingredients, description } = req.body;
  const image = req.file;

  try {
    let imagePath = req.body.image; // If the image isn't updated, retain the old one
    if (image) {
      imagePath = image.filename; // Save only the filename
    }

    const updatedMenuItem = await Menu.findByIdAndUpdate(
      id,
      { name, category, price, availability, image: imagePath, ingredients, description },
      { new: true }
    );

    if (!updatedMenuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.status(200).json({ message: "Menu item updated successfully", menuItem: updatedMenuItem });
  } catch (error) {
    res.status(400).json({ message: "Error updating menu item", error });
  }
};


// Delete a menu item
export const deleteMenuItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMenuItem = await Menu.findByIdAndDelete(id);
    if (!deletedMenuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.status(200).json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting menu item", error });
  }
};

// Get all menu items
export const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(400).json({ message: "Error fetching menu items", error });
  }
};

// Get a single menu item

export const getMenuItem = async (req, res) => {
  const { id } = req.params;
  try {
    const menuItem = await Menu.findById(id);
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.status(200).json(menuItem);
  } catch (error) {
    res.status(400).json({ message: "Error fetching menu item", error });
  }
};

export { upload }; // Export the multer upload
