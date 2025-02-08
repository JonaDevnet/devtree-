import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const URL = 'mongodb+srv://root:BKpNKjvRcIrMY1cS@cluster0.1y4ii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        
        const conecction = await mongoose.connect(URL);
        console.log(conecction);

        console.log(`MongoDB Conectado`);
    } catch (error) {
        console.log(error);
    }
} 