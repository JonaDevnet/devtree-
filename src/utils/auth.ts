import bcrypt from "bcrypt"

export const hashPassword = async (password: string) => {
    try {

        if(!password){
            const error = new Error("no se puede hashear un password vacio");
            return;
        }

        const salt = await bcrypt.genSalt(10); // salt realiza saltos para mayor seguridad en diferentes contrase;as
        
        return await bcrypt.hash(password, salt); // recibe la pass y los saltos
    } catch (error) {
        console.error(error);
    }
}

export const checkPassword = async (enteredPass:string, hash: string) => {
    try {
        if(!enteredPass || !hash){
            const error = new Error("No se puede comprobar el password.");
            return;
        }

        return await bcrypt.compare(enteredPass, hash);
    } catch (error) {
        console.error(error);
    }
}