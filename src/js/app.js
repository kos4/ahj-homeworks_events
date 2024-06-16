import PlayingField from "./classes/PlayingField";
import GamePlay from "./classes/GamePlay";

const fieldSize = 4;
const playingField = new PlayingField("Поймай гоблина", fieldSize);
playingField.init();
const gamePlay = new GamePlay(fieldSize);
gamePlay.init();
