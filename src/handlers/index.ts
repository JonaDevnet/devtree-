import type { Request, Response } from "express";
import User from "../models/User";

export const createAccount = async (req: Request, res: Response) => {

    const { email } = req.body;

    const userExist = await User.findOne({email});
    
    if(userExist) {
        const error = new Error('El error ya esta registrado');
        return res.status(409).json({error : error.message}); // recuperamos el mensaje de error
    }
    
    const user = new User(req.body) ;

    await user.save();

    res.status(201).send({msg : 'Registro agregado'});
}