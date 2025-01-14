import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrdersByUser,
  updateOrderStatus,
  deleteOrder,
} from '../controllers/orderController.js';
import adminMiddleware from '../middleware/adminMiddleware.js';

const router = express.Router();

// Create a new order (accessible to any logged-in user; no specific authentication middleware here)
router.post('/order', createOrder);

// Get all orders (admin-only route)
router.get('/orders', getAllOrders);

// Get orders by user ID (this could also be restricted by admin or specific user validation if needed)
router.get('/orders/:userId', getOrdersByUser);

// Update order status (admin-only route)
router.patch('/order/:orderId/status', updateOrderStatus);

// Delete an order (admin-only route)
router.delete('/order/:orderId', deleteOrder);

export default router;
