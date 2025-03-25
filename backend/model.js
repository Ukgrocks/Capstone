import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    useremail: { type: String, required: true, unique: true, sparse: true },
    password: { type: String, required: true },
    travelList: { type: [String], default: [] } // ✅ Stores places user wants to visit
});

const User = mongoose.model("User", userSchema);
export default User;
