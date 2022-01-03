import express from 'express';
import { getAllUsers, createUser, updateUser, deleteUser, getUserById } from '../../../controllers/user';
import { createUserValidationSchema, deleteUserValidationSchema, updateUserValidationSchema } from '../../../utils/validationSchemas';
import { ICreateUser, IDeleteUser, IUpdateUser } from '../../../types/interfaces';
import validate from '../../../middleware/validation';

const router = express.Router();

router.get('/getUsers', getAllUsers);
router.get('/getUserById', getUserById);
router.post('/createUser', validate<ICreateUser>(createUserValidationSchema), createUser);
router.put('/updateUser', validate<IUpdateUser>(updateUserValidationSchema), updateUser);
router.delete('/deleteUser', validate<IDeleteUser>(deleteUserValidationSchema), deleteUser);

export default router;
