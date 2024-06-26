import express from 'express';
import userRoutes from "./userRoutes.js"
import studentRoutes from './studentRoutes.js';
import {homePage} from '../controllers/homeController.js';
import companyRoutes from './companyRoutes.js';
import passport from 'passport';

const router = express.Router();

router.get('/', passport.checkAuthentication, homePage);
router.use('/users', userRoutes);
router.use('/students', studentRoutes);
router.use('/company', companyRoutes);

export default router;
