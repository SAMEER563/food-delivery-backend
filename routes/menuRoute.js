import express from 'express';
import { addMenuItem, updateMenuItem, deleteMenuItem, getAllMenuItems, getMenuItem } from '../controllers/menuController.js';
import { upload } from '../controllers/menuController.js'; // Import multer upload
import adminMiddleware from '../middleware/adminMiddleware.js';


const router = express.Router();

// Route for adding a new menu item (with image upload)
router.post('/menu', upload.single('image'), addMenuItem);

// Route for updating an existing menu item (with image upload)
router.put('/menu/:id', upload.single('image'), updateMenuItem);

// Route for getting all menu items
router.get('/menu', getAllMenuItems);

// Route for getting a single menu item
router.get('/menu/:id', getMenuItem);

// Route for deleting a menu item
router.delete('/menu/:id', deleteMenuItem);

export default router;
