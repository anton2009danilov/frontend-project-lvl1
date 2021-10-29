#!/usr/bin/env node
import runGame from '../src/index.js';

const digitCapacity = 100;
const questType = 'brain-calc';

const generateQuest = () => {
  const genNum1 = () => Math.floor(Math.random() * digitCapacity);
  const genNum2 = () => Math.floor(Math.random() * digitCapacity);

  const genSign = () => {
    const mathSigns = ['+', '-', '*'];
    const random = Math.floor(Math.random() * mathSigns.length);

    return mathSigns[random];
  };

  return [genNum1(), genNum2(), genSign()];
};

const calcAnswer = (questArr) => {
  const [num1, num2, sign] = questArr;
  let result;

  switch (sign) {
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

runGame(questType, generateQuest, calcAnswer);
