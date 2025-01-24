import express, { json } from 'express';
require('dotenv').config(); 
import { connect } from 'mongoose';
const MONGOURI = process.env.MONGOURI;
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth/auth-routes';
import adminProductsRouter from './routes/admin/products-routes';
connect(MONGOURI).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
});


const app=express();
const PORT=process.env.PORT || 5000;

app.use(
    cors({
        origin:"http://localhost:5173",
        methods : ["GET","POST","PUT","DELETE"],
        allowedHeaders : ["Content-Type","Authorization","Cache-Control","Expires","Pragma"],
        credentials : true
    })
);
app.use('/api/auth',authRouter);
app.use("/api/admin/products",adminProductsRouter);
app.use(json());
app.use(cookieParser());
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})
