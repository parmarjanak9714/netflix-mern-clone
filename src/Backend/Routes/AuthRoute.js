import express from 'express';

import { registerUser, loginUser } from '../controllers/authController.js';
//mini router function to make samall route 
const router = express.Router();

// ====================================================================
//  API ROUTES LINKING
// ====================================================================

// url path set register
router.post('/register', registerUser);
// router.post: જ્યારે પણ નવો ડેટા ક્રિએટ કે સેન્ડ કરવાનો હોય, ત્યારે સિક્યોરિટી માટે હંમેશા 'POST' મેથડ વાપરવામાં આવે છે.
// '/register': આ આપણી લિંકનો છેલ્લો ભાગ (Path) છે. જ્યારે ફ્રન્ટએન્ડમાંથી આ રસ્તા પર રિકવેસ્ટ આવશે, ત્યારે તે ઓટોમેટિક 'registerUser' વાળું લોજિક રન કરી દેશે.

// url path set login
router.post('/login', loginUser);

export default router;
