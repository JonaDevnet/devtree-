import { Router } from "express";

const router = Router();

/**
 * Autentificacion y registro
 */
router.post('/aut/register', (req, res) => {
    console.log('Desde register');   
})

export default router;
