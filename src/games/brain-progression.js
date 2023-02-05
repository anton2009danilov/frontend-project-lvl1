import runGame from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const gameName = 'brain-progression';
const digitCapacity = 100;

const stepBottomLimit = 1;
const stepTopLimit = 21;
const minLength = 5;
const maxLength = 10;

const generateQuest = () => {
  const progression = [];

  const length = generateRandomNum(maxLength, minLength);
  let newNum = generateRandomNum(digitCapacity);
  const secretNumPosition = generateRandomNum(length);
  const step = generateRandomNum(stepTopLimit, stepBottomLimit);
  let position = 0;
  let secretNum;

  do {
    if (position === secretNumPosition) {
      progression.push('..');
      secretNum = newNum;
    } else {
      progression.push(newNum);
    }

    newNum += step;
    position += 1;
  } while (position < length);

  return [String(secretNum), progression.join(' ')];
};

export default () => runGame(gameName, generateQuest);
