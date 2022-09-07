import readlineSync from 'readline-sync';
import sayHello from './games/brain-games.js';

const roundsLimit = 3;

const askQuestion = (questionText) => readlineSync.question(questionText);

export default (generateQuest = null) => {
  const userName = sayHello();

  if (!generateQuest) {
    return;
  }

  for (let i = 1; i <= roundsLimit; i += 1) {
    const questData = generateQuest();
    const [, questQuestionText] = questData;
    const userAnswer = askQuestion(questQuestionText);
    const [correctAnswer] = questData;

    if (userAnswer === correctAnswer) {
      console.log('Correct!');

      if (i === roundsLimit) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`
      + `Let's try again, ${userName}!`);
      break;
    }
  }
};
