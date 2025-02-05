import express from 'express';
//import User from '../models/user.model'; // I am importing the user model here to make my API
import { createUser , deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

// Create a new user
router.post('/', createUser);

// Delete a user
router.delete('/:id', deleteUser)

// update user api to add later
router.put('/', async (req, res) => {

});



export default router;