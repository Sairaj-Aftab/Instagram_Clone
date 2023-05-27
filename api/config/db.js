import mongoose from "mongoose";

const connectMongoDB = () => {
    try {
        const connect = mongoose.connect(process.env.MONGODB);
        console.log(`MongoDB successfully connected`.bgCyan.black);
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;