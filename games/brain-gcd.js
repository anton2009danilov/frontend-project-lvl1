#!/usr/bin/env node
import runGame from '../src/index.js';

const digitCapacity = 101;
const questType = 'brain-gcd';

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

  return result;
};

const generateQuest = () => {
  const num1 = Math.floor(Math.random() * digitCapacity);
  const num2 = Math.floor(Math.random() * digitCapacity);

  return [num1, num2];
};

const calcAnswer = (questData) => {
  const [num1, num2] = questData;

  return findBiggestCommonDivider(num1, num2);
};

runGame(questType, generateQuest, calcAnswer);
