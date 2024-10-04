import express from 'express';
import adminController from '../controllers/adminController.js';

const router = express.Router();

// router.post('/create', adminController.createAdmin);
router.post('/login', adminController.loginAdmin);  
// router.get('/allusers',adminController.getUsers);
// router.post('/create-user', adminController.createUser);


export default router;