import express from 'express';
import passport from 'passport';

const router = express.Router();

import { createStudentPage, createStudent, deleteStudent } from '../controllers/studentController.js';

// ------------------ Get requests ------------
router.get('/create', passport.checkAuthentication, createStudentPage);

router.get('/delete/:id', passport.checkAuthentication, deleteStudent);

// ------------------- Posts Requests ----------
router.post('/create-student', passport.checkAuthentication, createStudent);

export default router;
