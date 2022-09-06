#!/usr/bin/env node
import runGame from '../src/index.js';
import generateQuest from '../src/games/brain-calc.js';

runGame(generateQuest);
