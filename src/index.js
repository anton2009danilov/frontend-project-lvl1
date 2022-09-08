import readlineSync from 'readline-sync';

const roundsLimit = 3;

const askQuestion = (questionText) => readlineSync.question(questionText);

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return (userName !== '' ? userName : 'Anonymous');
};

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  return userName;
};

export default (generateQuest) => {
  const userName = sayHello();

  if (!generateQuest) {
    return;
  }

  for (let i = 1; i <= roundsLimit; i += 1) {
    const questData = generateQuest();
    const [, questQuestionText] = questData;
    const answerRequestStr = 'Your answer: ';
    const userAnswer = askQuestion(`${questQuestionText}${answerRequestStr}`);
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
