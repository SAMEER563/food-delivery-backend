import express from 'express';
import { adminLogin, getUsers, login, logout, register } from '../controllers/authController.js';



const router = express.Router();


router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/admin/login', adminLogin);


router.get('/users', getUsers)


// router.post('/login', login);

export default router;
