import cli from './cli.js';

const roundsLimit = 3;
let userName = '';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  userName = cli('name');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default (questType = null, generateQuest = null, calcAnswer = null) => {
  let roundCounter = 0;
  userName = sayHello();

  while (roundCounter < roundsLimit && questType) {
    const questData = generateQuest();
    const userAnswer = cli(questType, questData);
    const correctAnswer = calcAnswer(questData);

    if (userAnswer === String(correctAnswer)) {
      roundCounter += 1;
      console.log('Correct!');

      if (roundCounter === roundsLimit) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};
