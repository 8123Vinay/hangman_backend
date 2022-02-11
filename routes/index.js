const {Router}=require('express');

const sessions=require('./sessions');

const router=Router();

router.use("/sessions", sessions);

module.exports=router;