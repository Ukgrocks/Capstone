import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    useremail: { type: String, required: true, unique: true, sparse: true }, // 👈 Add "sparse: true"
    password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);
export default User;
