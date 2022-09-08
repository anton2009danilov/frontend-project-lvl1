import runGame from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const gameName = 'brain-even';
const digitCapacity = 1000;
const isEven = (num) => num % 2 === 0;

const calcAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const generateQuest = () => {
  const num = generateRandomNum(digitCapacity);

  return [calcAnswer(num), num];
};

export default () => runGame(gameName, generateQuest);
