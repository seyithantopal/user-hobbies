import express from 'express';
import { getAllHobbies, createHobby, deleteHobby } from '../../../controllers/hobby';
import { createHobbyValidationSchema, deleteHobbyValidationSchema } from '../../../utils/validationSchemas';
import { ICreateHobby, IDeleteHobby } from '../../../types/interfaces';
import validate from '../../../middleware/validation';

const router = express.Router();

router.get('/getHobbies', getAllHobbies);
router.post('/createHobby', validate<ICreateHobby>(createHobbyValidationSchema), createHobby);
router.delete('/deleteHobby', validate<IDeleteHobby>(deleteHobbyValidationSchema), deleteHobby);

export default router;
