import express from 'express';
const application = express();

application.listen(3000,()=>{
    console.log(`server is running on port 3000`);
})