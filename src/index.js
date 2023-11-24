require('dotenv').config();
const express = require("express")
const app = express();
const userRouter = require('./routes');

app.use(express.json());

app.use(userRouter);

app.use((error, _req, res, _next)=>{
    const errorObj = {
        message: error?.message || "Something wen wrong",
        status: error?.status || 500
    }

    res.status(errorObj.status).json(errorObj);
})

app.listen(4000, ()=>{
    console.log(`http://localhost:4000`);
})