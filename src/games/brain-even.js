import runGame from '../index.js';

const digitCapacity = 1000;
const isEven = (num) => num % 2 === 0;

const calcAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const generateQuestionText = (num) => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';
  const task = `Question: ${num}\n`;

  return `${description}${task}`;
};

const generateQuest = () => {
  const num = Math.floor(Math.random() * digitCapacity);

  return [calcAnswer(num), generateQuestionText(num)];
};

export default () => runGame(generateQuest);
