import { Router } from "express";
import User from "./models/User";

const router = Router();


/**
 * Autentificacion y registro
 */
router.post('/auth/register', async (req, res) => {
    const user = new User(req.body) ;

    await user.save();

    res.send({msg : 'Registro agregado'});
})

export default router;
