import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const application = express();

const startServer = async () =>{
    application.listen(process.env.PORT || 3000,()=>{
        console.log(`server is running on port ${process.env.PORT || 3000}`);
    })
}

await startServer();