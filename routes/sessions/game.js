const {Router}=require('express');

const router=Router();

router.get('/' , (req,res)=>{
    res.send("hello fro the game page")
})



module.exports=router;