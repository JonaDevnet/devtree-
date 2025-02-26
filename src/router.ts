import { Router } from "express";
import { body } from 'express-validator';
import { createAccount } from "./handlers";

const router = Router();


/**
 * Autentificacion y registro
 */
router.post('/auth/register', 
    body('handle').notEmpty(),
    createAccount )

export default router;
