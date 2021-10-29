#!/usr/bin/env node
import runGame from '../src/index.js';

const digitCapacity = 1000;
const questType = 'brain-even';
const isEven = (num) => num % 2 === 0;

const generateQuest = () => Math.floor(Math.random() * digitCapacity);
const calcAnswer = (num) => (isEven(num) ? 'yes' : 'no');

runGame(questType, generateQuest, calcAnswer);
