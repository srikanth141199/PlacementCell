// user.routes.js
import express from 'express';
import passport from 'passport';

const router = express.Router();

import { signup, signin, signout, createUser, createSession, downloadCsv } from '../controllers/userController.js';


router.get('/signup', signup);
router.get('/signin', signin);
router.get('/signout', passport.checkAuthentication, signout);
router.get('/download-csv', passport.checkAuthentication, downloadCsv);

router.post('/create', createUser);
router.post('/create-session', passport.authenticate('local', { failureRedirect: '/users/signin' }), createSession);

export default router;
