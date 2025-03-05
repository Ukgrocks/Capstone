import connectToMongo from './db.js';
import loginRouter from "./auth.js";
import signupRouter from "./signup.js";
import cors from 'cors';
// const cors = require('cors');
connectToMongo();
import express, { json } from 'express';
const app = express()
const port = 5000

app.use(json());
app.use(cors());
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


