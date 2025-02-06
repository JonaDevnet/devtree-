import { Router } from "express";

const router = Router();

/**
 * Autentificacion y registro
 */
router.post('/auth/register', (req, res) => {
    console.log('Desde register');   
})

export default router;
