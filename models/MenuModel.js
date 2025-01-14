import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: Boolean, default: true },
  image: { type: String, required: true },  // Store the image path here
  ingredients: { type: [String], required: true },  // List of ingredients
  description: { type: String, required: true },  // Description of the menu item
});

export default mongoose.model("Menu", menuSchema);
