#!/usr/bin/env node
import runGame from '../src/index.js';

const digitCapacity = 100;
const questType = 'brain-even';
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
  const num = Math.floor(Math.random() * digitCapacity);

  return [num, calcAnswer(num)];
};

runGame(questType, generateQuest);
