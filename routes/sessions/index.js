const {Router}=require('express');

const router=Router();

const userRouter=require('./user.js')

const gameRouter=require('./game.js')

router.use("/user", userRouter);

router.use("/game" ,gameRouter);

router.get('/' ,(req,res)=>{
    res.send("Hello from the sessions page");
})

module.exports=router;