#!/usr/bin/env node
import runGame from '../src/index.js';

const isEven = (num) => num % 2 === 0;
const digitCapacity = 1000;
const generateQuest = () => Math.floor(Math.random() * digitCapacity);
const checkAnswer = (num) => (isEven(num) ? 'yes' : 'no');
const questType = 'brain-even';

runGame(questType, generateQuest, checkAnswer);

// const playBrainEven = (userName) => {
//   let correctAnswersCount = 0;
//   const correctAnswersLimit = 3;

//   while (correctAnswersCount < correctAnswersLimit) {
//     const userAnswer = readlineSync.question(
//       'Answer "yes" if the number is even, otherwise answer "no".\n'
//       + `Question: ${randomNumber}\n`
//       + 'Your answer: ',
//     );

//     if (userAnswer === correctAnswer) {
//       correctAnswersCount += 1;
//       console.log('Correct!');

//       if (correctAnswersCount === correctAnswersLimit) {
//         console.log(`Congratulations, ${userName}!`);
//       }
//     } else {
//       console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
//       console.log(`Let's try again, ${userName}!`);
//       break;
//     }
//   }
// };
