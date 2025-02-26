import type { Request, Response } from "express";
import User from "../models/User";
import { hashPassword } from "../utils/auth";

export const createAccount = async (req: Request, res: Response) => {

    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({email});
    
        if(userExist) {
            const error = new Error('El error ya esta registrado');
            res.status(409).json({error : error.message}); // recuperamos el mensaje de error
            return;
        }
        
        const user = new User(req.body);
        user.password = await hashPassword(password);


        await user.save();

        res.status(201).send({msg : 'Registro agregado'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error en el servidor'});
    }

}