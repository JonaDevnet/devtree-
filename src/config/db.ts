import mongoose from "mongoose";
import colors from 'colors';
//console.log("MONGO_URI:", process.env.MONGO_URI);

export const connectDb = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI);
        const url = `${connection.host}:${connection.port}`;

        console.log(colors.cyan.bold(`MongoDb conectado en ${url}`));

    } catch (error) {
        console.log(colors.bgRed.italic(error.message));
        process.exit();
    }
} 