import runGame from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const gameName = 'brain-prime';
const digitCapacity = 100;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  const max = num / 2;

  for (let i = 2; i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const calcAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const generateQuest = () => {
  const num = generateRandomNum(digitCapacity);

  return [calcAnswer(num), num];
};

export default () => runGame(gameName, generateQuest);
