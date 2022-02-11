const maxLives=6;

const {Word}=require("../models")
async function checkStatus(gameSession){
    let playedArray = (gameSession.playedLetters).split("");

    let playedSet = new Set(playedArray);

    let wordObj = await Word.findOne({ where: { id: gameSession.wordId } });

    let actualWordArray = (wordObj.title).split("");

    let actualWordSet = new Set(actualWordArray);

   

    let livesLeft = maxLives;

    for (let i = 0; i < playedArray.length; i++) {
        if (!actualWordSet.has(playedArray[i])) {
            livesLeft--;
        }
    }

    let wrongGueses = 6 - livesLeft;
    if(livesLeft==0 || (wrongGueses+actualWordSet.size==playedSet.size)){
        
        gameSession.update({endedAt:new Date()});
    }

    
   

}

async function playWordService(gameSession,letter) {
   
    
    let playedLetters = gameSession.playedLetters;
    let playedSet=new Set(playedLetters.split(""));
    if(playedSet.has(letter)){
        return;
    }

    playedLetters+=letter;

    await gameSession.update({ playedLetters: playedLetters });
    await checkStatus(gameSession);

}
module.exports = playWordService
