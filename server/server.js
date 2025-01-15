const express=require('express');
require('dotenv').config(); 
const mongoose=require('mongoose');
const MONGOURI = process.env.MONGOURI;
const cors=require('cors');
const cookieParser=require('cookie-parser');

mongoose.connect(MONGOURI).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
});


const app=express();
const PORT=process.env.PORT || 5000;

app.use(
    cors({
        origin:"http://localhost:5173/",
        methods : ["GET","POST","PUT","DELETE"],
        allowedHeaders : ["Content-Type","Authorization","Cache-Control","Expires","Pragma"],
        credentials : true
    })
);

app.use(express.json());
app.use(cookieParser());
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})