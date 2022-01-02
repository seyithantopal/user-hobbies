import express from 'express';
import { getAllUsers, createUser, updateUser, deleteUser } from '../../../controllers/user';

const router = express.Router();

router.get('/getUsers', getAllUsers);
router.post('/createUser', createUser);
router.put('/updateUser', updateUser);
router.delete('/deleteUser', deleteUser);

export default router;
