import { Router } from "express";
import { body } from 'express-validator';
import { createAccount, login } from "./handlers";

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
        .isLength({min: 8})
        .withMessage('El password o puede ir vacio'),  

    createAccount 
)

router.post('/auth/login',
    // reglas de validacion
    body('email')
        .isEmail()
        .withMessage('El email no valido'),    
    body('password')
        .notEmpty()
        .withMessage('El password es obligatorio'), 

    login
);

export default router;
