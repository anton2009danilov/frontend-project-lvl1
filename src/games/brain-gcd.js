import runGame from '../index.js';

const digitCapacity = 101;

const findBiggestCommonDivider = (num1, num2) => {
  let maxDivider = num1 >= num2 ? num1 : num2;
  const minDivider = 1;
  let result;

  if (num1 % maxDivider === 0 && num2 % maxDivider === 0) {
    result = maxDivider;
  } else {
    maxDivider = Math.floor(maxDivider / 2);

    for (let i = maxDivider; i >= minDivider; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        result = i;
        break;
      }
    }
  }

  return String(result);
};

const calcAnswer = (questData) => {
  const [num1, num2] = questData;

  return findBiggestCommonDivider(num1, num2);
};

const generateQuestionText = (questData) => {
  const [num1, num2] = questData;

  const description = 'Find the greatest common divisor of given numbers.\n';
  const task = `Question: ${num1} ${num2}\n`;

  return `${description}${task}`;
};

const generateQuest = () => {
  const num1 = Math.floor(Math.random() * digitCapacity);
  const num2 = Math.floor(Math.random() * digitCapacity);
  const questArr = [num1, num2];

  return [calcAnswer(questArr), generateQuestionText(questArr)];
};

export default () => runGame(generateQuest);
