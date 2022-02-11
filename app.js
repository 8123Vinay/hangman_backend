const express = require('express');



const app = express();

const routes = require('./routes');

const { sequelize, Word,GameSession } = require('./models');
const {createSession,playSession}=require('./routes/sessions/controller')

async function start() {
    app.use(express.json())

    app.use(routes)



    app.listen(3001, () => {
        console.log("we are listening on the port 3001")
    })
    await sequelize.sync();

   
    app.post("/", async (req, res) => {
        await createSession(req,res);
       
    })

    app.post("/play/:id" , async (req,res)=>{
          await playSession(req,res);

    })   
}

start()