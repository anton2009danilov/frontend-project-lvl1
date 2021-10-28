#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const playBrainEven = (userName) => {
  let userAnswer = '';
  let correctAnswersCount = 0;
  const correctAnswersLimit = 3;

  while (correctAnswersCount < correctAnswersLimit) {
    const digitCapacity = 1000;
    const randomNumber = Math.floor(Math.random() * digitCapacity);
    const correctAnswer = randomNumber % 2 === 0;
    const userInput = readlineSync.question(
      'Answer "yes" if the number is even, otherwise answer "no".\n'
      + `Question: ${randomNumber}\n`
      + 'Your answer: ',
    );

    switch (userInput) {
      case 'yes':
        userAnswer = true;
        break;
      case 'no':
        userAnswer = false;
        break;
      default:
    }

    if (userAnswer === correctAnswer) {
      correctAnswersCount += 1;
      console.log('Correct!');

      if (correctAnswersCount === correctAnswersLimit) {
        console.log(`Congratulations, ${userName}`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`let's try again, ${userName}`);
      break;
    }
  }
};

const userName = greetUser();
playBrainEven(userName);
