const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./database.sqlite'
});



class GameSession extends Model {}
GameSession.init({
   id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
   },    
  playerName: DataTypes.STRING,
  playedLetters:DataTypes.STRING,
  startedAt: DataTypes.DATE,
  endedAt:DataTypes.DATE,
}, { sequelize, modelName: 'game_sessions' });

class Word extends Model{}
Word.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },  
    title:DataTypes.STRING
}, { sequelize, modelName: 'words' });

GameSession.wordId=GameSession.belongsTo(Word);

module.exports={
    GameSession,
    Word,
    sequelize
}