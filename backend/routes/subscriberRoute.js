import express from 'express';
import { signUp } from '../controllers/subscriberController.js';

const router = express.Router();


router.route("/signup").post(signUp);


export default router;