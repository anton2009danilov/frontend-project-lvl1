import runGame from '../index.js';

const digitCapacity = 100;

const calcAnswer = (questArr) => {
  const [num1, num2, sign] = questArr;
  let resultNum;

  switch (sign) {
    case '+':
      resultNum = num1 + num2;
      break;
    case '-':
      resultNum = num1 - num2;
      break;
    case '*':
      resultNum = num1 * num2;
      break;
    default:
      resultNum = num1 / num2;
      break;
  }

  return String(resultNum);
};

const generateQuestionText = (questData) => {
  const [num1, num2, sign] = questData;

  const description = 'What is the result of the expression?\n';
  const task = `Question: ${num1} ${sign} ${num2}\n`;

  return `${description}${task}`;
};

const generateQuest = () => {
  const num1 = Math.floor(Math.random() * digitCapacity);
  const num2 = Math.floor(Math.random() * digitCapacity);

  const genSign = () => {
    const mathSigns = ['+', '-', '*'];
    const random = Math.floor(Math.random() * mathSigns.length);

    return mathSigns[random];
  };

  const sign = genSign();

  const questArr = [num1, num2, sign];

  return [calcAnswer(questArr), generateQuestionText(questArr)];
};

export default () => runGame(generateQuest);
