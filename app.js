const express = require('express');



const app = express();

const routes = require('./routes');

const { sequelize, Word,GameSession } = require('./models');
const {createSession,playSession}=require('./routes/sessions/controller')

async function start() {
    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', "*");
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });
    app.use(express.json())

    app.use(routes)



    app.listen(3001, () => {
        console.log("we are listening on the port 3001")
    })
    await sequelize.sync();

   
    app.post("/", async (req, res) => {
        await createSession(req,res);
        res.status(200);
    })

    app.post("/play/:id" , async (req,res)=>{
          await playSession(req,res);
          res.status(200);
    })   
}

start()