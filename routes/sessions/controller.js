const {Word,GameSession}=require('../../models')
const playLogic=require("../../models/logic.js");
const playWordService=require("../../services/game_session_service")


async function createSession(req,res){
    let gameSession=await GameSession.create({
        playerName:req.body.name,
        playedLetters: "",
        startedAt:new Date(),
        endedAt:null,
        wordId:Math.floor(Math.random() * 20)
    }) 
      
    let response=await playLogic(gameSession);
    response.id=gameSession.id;
    res.json(response);
 
}

async function playSession(req,res){
    const gameId=req.params.id;
    const letter=req.body.letter;
    console.log(gameId);
    let gameSession=await GameSession.findByPk(gameId);
    await playWordService(gameSession,letter);
    res.json(await playLogic(gameSession));

}

module.exports={
    playSession,
    createSession
}



