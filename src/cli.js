import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return (userName !== '' ? userName : 'Anonymous');
};

const getBrainEvenAnswer = (questData) => {
  const [questNum] = questData;

  return readlineSync.question(
    'Answer "yes" if the number is even, otherwise answer "no".\n'
  + `Question: ${questNum}\n`
  + 'Your answer: ',
  );
};

const getBrainCalcAnswer = (questData) => {
  const [[num1, num2, sign]] = questData;

  return readlineSync.question(
    'What is the result of the expression?\n'
  + `Question: ${num1} ${sign} ${num2}\n`
  + 'Your answer: ',
  );
};

const getBrainGCDAnswer = (questData) => {
  const [[num1, num2]] = questData;

  return readlineSync.question(
    'Find the greatest common divisor of given numbers.\n'
  + `Question: ${num1} ${num2}\n`
  + 'Your answer: ',
  );
};

const getBrainProgressionAnswer = (questData) => {
  const [questString] = questData;

  return readlineSync.question(
    'What number is missing in the progression?\n'
  + `Question: ${questString}\n`
  + 'Your answer: ',
  );
};

export default (gameName = null, questData = null) => {
  switch (gameName) {
    case 'brain-even':
      return getBrainEvenAnswer(questData);
    case 'brain-calc':
      return getBrainCalcAnswer(questData);
    case 'brain-gcd':
      return getBrainGCDAnswer(questData);
    case 'brain-progression':
      return getBrainProgressionAnswer(questData);
    default:
      return getUserName();
  }
};
