import express from 'express';
import { getAllHobbies, createHobby, deleteHobby } from '../../../controllers/hobby';

const router = express.Router();

router.get('/getHobbies', getAllHobbies);
router.post('/createHobby', createHobby);
router.delete('/deleteHobby', deleteHobby);

export default router;
