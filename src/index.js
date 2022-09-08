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

const generateBrainCalcText = (questData) => {
  const [num1, num2, sign] = questData;

  const description = 'What is the result of the expression?\n';
  const task = `Question: ${num1} ${sign} ${num2}\n`;
  return `${description}${task}`;
};

const generateBrainEvenText = (num) => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';
  const task = `Question: ${num}\n`;

  return `${description}${task}`;
};

const generateBrainGCDText = (questData) => {
  const [num1, num2] = questData;

  const description = 'Find the greatest common divisor of given numbers.\n';
  const task = `Question: ${num1} ${num2}\n`;

  return `${description}${task}`;
};

const generateBrainPrimeText = (num) => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
  const task = `Question: ${num}\n`;

  return `${description}${task}`;
};

const generateBrainProgressionText = (questString) => {
  const description = 'What number is missing in the progression?\n';
  const task = `Question: ${questString}\n`;

  return `${description}${task}`;
};

const generateQuestionText = (gameName, questData) => {
  let questText;
  const answerRequestStr = 'Your answer: ';

  switch (gameName) {
    case 'brain-calc':
      questText = `${generateBrainCalcText(questData)}${answerRequestStr}`;
      break;
    case 'brain-even':
      questText = `${generateBrainEvenText(questData)}${answerRequestStr}`;
      break;
    case 'brain-gcd':
      questText = `${generateBrainGCDText(questData)}${answerRequestStr}`;
      break;
    case 'brain-prime':
      questText = `${generateBrainPrimeText(questData)}${answerRequestStr}`;
      break;
    case 'brain-progression':
      questText = `${generateBrainProgressionText(questData)}${answerRequestStr}`;
      break;
    default:
      break;
  }

  return questText;
};

export default (gameName, generateQuest) => {
  const userName = sayHello();

  if (!generateQuest) {
    return;
  }

  for (let i = 1; i <= roundsLimit; i += 1) {
    const [correctAnswer, questData] = generateQuest();
    const userAnswer = askQuestion(`${generateQuestionText(gameName, questData)}`);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');

      if (i === roundsLimit) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};
