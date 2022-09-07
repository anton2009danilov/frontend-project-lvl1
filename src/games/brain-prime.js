import runGame from '../index.js';

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

const generateQuestionText = (num) => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
  const task = `Question: ${num}\n`;

  return `${description}${task}`;
};

const calcAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const generateQuest = () => {
  const num = Math.floor(Math.random() * digitCapacity);

  return [calcAnswer(num), generateQuestionText(num)];
};

export default () => runGame(generateQuest);
