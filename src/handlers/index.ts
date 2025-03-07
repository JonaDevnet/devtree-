import type { Request, Response } from "express";
import { validationResult } from "express-validator";
import slug, { reset } from 'slug';
import User from "../models/User";
import { hashPassword } from "../utils/auth";

export const createAccount = async (req: Request, res: Response) => {

    try {

        // Manejar errores
        let error = validationResult(req);
        if(!error.isEmpty()){
            res.status(400).json({erros: error.array()});
            return;
        }

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

export const login = async (req: Request, res: Response) => {
    try {
        // Manejar errores
        let error = validationResult(req);
        if(!error.isEmpty()){
            res.status(400).json({erros: error.array()});
            return;
        }

        // buscamos si ya existe
        const { email, password} = req.body;

        const user = await User.findOne({email});
        
        if(!user) {
            const error = new Error('El usuario no existe');
            res.status(404).json({error : error.message}); // recuperamos el mensaje de error
            return;
        }

        res.status(201).send({msg : 'logueado con exito'})
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error en el servidor'});
    }
}