const router=require('express').Router()
const User=require('../model/user')
const List=require('../model/list')

router.post("/addtask",async(req,res)=>{
    try{

        const {title,body,id}=req.body
        const exuser=await User.findById(id)
        if(exuser)
        {
            const list=new List({
                title,body,user:exuser
            })
           await list.save().then(()=>
           res.status(200).json({list}))
             exuser.list.push(list);
            await exuser.save()
        }
        else{
            return res.status(500).json({
                message:"not found user",
                error:error.message,
            })
        }
    }catch(error)
    {
        res.status(400).json({
            message:"task not added"
        })
    }
})
router.put('/update/:id', async (req, res) => {
    try {
      const {title,body,id}=req.body;
      const exuser=await User.findById(id);
  
      if (!exuser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const updatedTask = await List.findByIdAndUpdate(
        req.params.id,
        { title, body },
        { new: true } // Return the updated document
      );
  
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      res.status(200).json({ message: 'Task updated successfully', updatedTask });
    } catch (error) {
      res.status(500).json({ message: 'Error updating task', error: error.message });
    }
  });
  
router.delete('/delete/:id',async(req,res)=>{
const {id}=req.body;
const exuser=await User.findByIdAndUpdate(id,{$pull:{list:req.params.id}})

if(exuser)
{
    await List.findByIdAndDelete(req.params.id).then(()=>
    res.status(200).json({
        message:"deleted sucessfully"
    }))
}
})

router.get("/gettask/:id",async (req,res)=>{
try{
const list=await List.find({user:req.params.id})
if(list.length!=0)
{
    return res.status(200).json({
        list
    })
}
else{
    return res.status(200).json({
        message:"no task is created"
    })
}

}
catch(error)
{
    return res.status(400).json({
        message:"not found"
    })
}
})



module.exports=router