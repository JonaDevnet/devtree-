import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const URL = 'youConnectionString';
        const conecction = await mongoose.connect();

        console.log(`MongoDB Conectado`);
    } catch (error) {
        
    }
}