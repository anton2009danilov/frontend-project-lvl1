#!/usr/bin/env node
import runGame from '../src/index.js';

const digitCapacity = 100;
const questType = 'brain-calc';

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

  return result;
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

  return [questArr, calcAnswer(questArr)];
};

runGame(questType, generateQuest);
