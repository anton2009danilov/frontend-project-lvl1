#!/usr/bin/env node
import runGame from '../src/index.js';

const digitCapacity = 100;
const questType = 'brain-progression';

const stepBottomLimit = 1;
const stepTopLimit = 21;
const minLength = 5;
const maxLength = 10;

const generateQuest = () => {
  const progression = [];

  const length = Math.floor(Math.random() * (maxLength - minLength) + minLength);
  let newNum = Math.floor(Math.random() * digitCapacity);
  const secretNumPosition = Math.floor(Math.random() * length);
  const step = Math.floor(Math.random() * (stepTopLimit - stepBottomLimit) + stepBottomLimit);
  let position = 0;
  let secretNum;

  do {
    if (position === secretNumPosition) {
      progression.push('..');
      secretNum = newNum;
    } else {
      progression.push(newNum);
    }

    newNum += step;
    position += 1;
  } while (position < length);

  return [progression.join(' '), secretNum];
};

runGame(questType, generateQuest);
