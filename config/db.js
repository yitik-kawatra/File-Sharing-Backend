require('dotenv').config();
const mongoose=require('mongoose');

const connect=async()=>{
    try{
        const response= await mongoose.connect(process.env.DB);
        console.log("connection created");
    }
    catch(error){
        console.log(error);
    }
}

module.exports=connect;

