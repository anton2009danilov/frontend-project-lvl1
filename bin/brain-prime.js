#!/usr/bin/env node
import runGame from '../src/index.js';
import generateQuest from '../src/games/brain-prime.js';

runGame(generateQuest);
