import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const userSchema = mongoose.Schema({
    user: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "admin" }
})

userSchema.pre("save", function (next) {
    let hash = bcrypt.hashSync(this.password, 10);// this keyword can
    this.password = hash
    next()
});


const user = mongoose.model("users", userSchema);

export default user;