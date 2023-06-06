import mongoose from "mongoose";
const Connection = () => {
    return mongoose.connect("mongodb://localhost:27017/Movie")
}

export default Connection;