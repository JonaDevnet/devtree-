import bcrypt from "bcrypt"

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10); // salt realiza saltos para mayor seguridad en diferentes contrase;as
    return await bcrypt.hash(password, salt); // recibe la pass y los saltos
}
