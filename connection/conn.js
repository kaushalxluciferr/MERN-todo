const mongoose=require('mongoose')

const conn=async (req,res)=>{
    try{
await mongoose.connect(process.env.LINK).then(()=>{
    console.log("connect sucessfully");
    
})
    }catch(error)
    {
    }
}
conn()