import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("DB connected") // whenever the db is connected to our system it's executed.
    })

    await mongoose.connect(`${process.env.MONGODB_URI}`)
}

export default connectDB