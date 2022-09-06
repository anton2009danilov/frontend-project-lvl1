import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return (userName !== '' ? userName : 'Anonymous');
};

const roundsLimit = 3;
let userName = '';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  userName = getUserName();
  console.log(`Hello, ${userName}!`);
  return userName;
};

const askQuestion = (questionText) => readlineSync.question(questionText);

export default (generateQuest) => {
  let roundCounter = 0;
  userName = sayHello();

  while (roundCounter < roundsLimit) {
    const questData = generateQuest();
    const [, questQuestionText] = questData;
    const userAnswer = askQuestion(questQuestionText);
    const [correctAnswer] = questData;

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
