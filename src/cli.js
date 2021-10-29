import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return (userName !== '' ? userName : 'Anonymous');
};

const getBrainEvenAnswer = (questData) => readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".\n'
  + `Question: ${questData}\n`
  + 'Your answer: ');

const getBrainCalcAnswer = (questData) => {
  const [num1, num2, sign] = questData;
  return readlineSync.question(
    'What is the result of the expression?\n'
  + `Question: ${num1} ${sign} ${num2}\n`
  + 'Your answer: ',
  );
};

export default (gameName = null, questData = null) => {
  switch (gameName) {
    case 'brain-even':
      return getBrainEvenAnswer(questData);
    case 'brain-calc':
      return getBrainCalcAnswer(questData);
    default:
      return getUserName();
  }
};
