import express from 'express';
import { getAllHobbies, createHobby, deleteHobby, getHobbyById } from '../../../controllers/hobby';
import { createHobbyValidationSchema, deleteHobbyValidationSchema } from '../../../utils/validationSchemas';
import { ICreateHobby, IDeleteHobby } from '../../../types/interfaces';
import validate from '../../../middleware/validation';

const router = express.Router();

router.get('/getHobbies', getAllHobbies);
router.get('/getHobbyById', getHobbyById);
router.post('/createHobby', validate<ICreateHobby>(createHobbyValidationSchema), createHobby);
router.delete('/deleteHobby', validate<IDeleteHobby>(deleteHobbyValidationSchema), deleteHobby);

export default router;
