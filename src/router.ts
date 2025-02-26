import { Router } from "express";
import { body } from 'express-validator';
import { createAccount } from "./handlers";

const router = Router();


/**
 * Autentificacion y registro
 */
router.post('/auth/register',

    //reglas de validacion
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacio'),
    body('name')
        .notEmpty()
        .withMessage('El name no puede ir vacio'),
    body('email')
        .isEmail()
        .withMessage('El email no valido'),    
    body('password')
        .isEmail()
        .withMessage('El password o puede ir vacio'),  

    createAccount )

export default router;
