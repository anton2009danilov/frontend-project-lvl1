#!/usr/bin/env node
import runGame from '../index.js';

const digitCapacity = 1000;
const questType = 'brain-even';
const isEven = (num) => num % 2 === 0;

const calcAnswer = (num) => (isEven(num) ? 'yes' : 'no');
const generateQuest = () => {
  const num = Math.floor(Math.random() * digitCapacity);

  return [num, calcAnswer(num)];
};

runGame(questType, generateQuest);
