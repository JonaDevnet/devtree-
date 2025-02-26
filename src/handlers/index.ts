import type { Request, Response } from "express";
import slug from 'slug';
import User from "../models/User";
import { hashPassword } from "../utils/auth";

export const createAccount = async (req: Request, res: Response) => {

    try {
        //capturamos el cuerpo de la solicitud
        const { email, password} = req.body;

        // buscamos si ya existe
        const userExist = await User.findOne({email});
        
        if(userExist) {
            const error = new Error('El correo ya esta registrado');
            res.status(409).json({error : error.message}); // recuperamos el mensaje de error
            return;
        }
        
        // capturamos de la solicitud el handle
        const handle = slug(req.body.handle, '');
        // buscamos si ya existe
        const userHandle = await User.findOne({email});

        if(userHandle) {
            const error = new Error('El usuario ya esta registrado');
            res.status(409).json({error : error.message}); // recuperamos el mensaje de error
            return;
        }
        // creamos el usuario con la solicitud
        const user = new User(req.body);

        //hasheamos el pass del usuario y formateamos el handle
        user.password = await hashPassword(password);
        user.handle = handle;


        //guardamos
        await user.save();

        res.status(201).send({msg : 'Registro agregado'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error en el servidor'});
    }

}