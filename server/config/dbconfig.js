import mongoose from "mongoose";

const dbConnect = async()=>{
   try {
    console.log(process.env.CONNECTION_STRING)
     const db=await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`Database connected : ${db.connection.name} ${db.connection.host}`)
   } catch (error) {
    console.log("db connection error : ",error.message)
    process.exit(1);
   }
}

export default dbConnect;