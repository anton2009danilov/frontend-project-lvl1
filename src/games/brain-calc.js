import runGame from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const gameName = 'brain-calc';
const digitCapacity = 100;

const calcAnswer = (quests) => {
  const [num1, num2, signStr] = quests;
  let result;

  switch (signStr) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = num1 / num2;
      break;
  }

  return String(result);
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
