#!/usr/bin/env node
import runGame from '../src/index.js';

const isEven = (num) => num % 2 === 0;
const digitCapacity = 1000;
const generateQuest = () => Math.floor(Math.random() * digitCapacity);
const calcAnswer = (num) => (isEven(num) ? 'yes' : 'no');
const questType = 'brain-even';

runGame(questType, generateQuest, calcAnswer);
