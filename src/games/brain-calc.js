import runGame from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const gameName = 'brain-calc';
const digitCapacity = 100;

const calcAnswer = (questArr) => {
  const [num1, num2, signStr] = questArr;
  let resultNum;

  switch (signStr) {
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

const generateQuest = () => {
  const num1 = generateRandomNum(digitCapacity);
  const num2 = generateRandomNum(digitCapacity);

  const genSign = () => {
    const mathSigns = ['+', '-', '*'];
    const random = generateRandomNum(mathSigns.length);

    return mathSigns[random];
  };

  const sign = genSign();

  const questData = [num1, num2, sign];

  return [calcAnswer(questData), questData];
};

export default () => runGame(gameName, generateQuest);
