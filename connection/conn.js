const mongoose=require('mongoose')

const conn=async (req,res)=>{
    try{
await mongoose.connect('mongodb+srv://user:user123@todocluster.r5znv.mongodb.net/mydatabase').then(()=>{
    console.log("connect sucessfully");
    
})
    }catch(error)
    {
    }
}
conn()