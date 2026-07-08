import express from 'express';
//add controller functions
import { getAllUsers, adminAddUser, updateUser, deleteUser } from '../controllers/AdminController.js';

const router = express.Router();

// ====================================================================
//ADMIN CRUD API ROUTES 
// ====================================================================

// all users fetch route
router.get('/users', getAllUsers);

//admin add new user route
router.post('/user/add', adminAddUser);

// update user route
router.put('/user/update/:id', updateUser);

//delete user route
router.delete('/user/delete/:id', deleteUser);

export default router;
