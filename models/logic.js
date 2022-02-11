const {Word}=require('./');
const maxLives=6;
async function playLogic(gameSession) {

    let playedArray = (gameSession.playedLetters).split("");

    let playedSet = new Set(playedArray);

    let wordObj = await Word.findOne({ where: { id: gameSession.wordId } });

    let actualWordArray = (wordObj.title).split("");

    let actualWordSet = new Set(actualWordArray);

    let maskedWord = actualWordArray.map((letter) => {
        if (playedSet.has(letter)) {
            return letter;
        }
        else {
            return "_"
        }
    })

    let livesLeft = maxLives;

    for (let i = 0; i < playedArray.length; i++) {
        if (!actualWordSet.has(playedArray[i])) {
            livesLeft--;
        }
    }
  
    return ({
        maskedWord,
        livesLeft,
        result:!!gameSession.endedAt
    })

  


}
module.exports = playLogic
