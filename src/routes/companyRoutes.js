import express from 'express';
import passport from 'passport';
import { companyPage, allocateInterview, scheduleInterview, updateStatus,  } from '../controllers/companyController.js';
const router = express.Router();

// -------- Get requests ----------
router.get('/home', passport.checkAuthentication, companyPage);

router.get('/allocate', passport.checkAuthentication, allocateInterview);

// -------- Post Requests ---------

router.post('/schedule-interview', passport.checkAuthentication, scheduleInterview);
router.post('/update-status/:id', passport.checkAuthentication, updateStatus);

export default router;
