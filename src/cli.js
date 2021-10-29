import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return (userName !== '' ? userName : 'Anonymous');
};

const getBrainEvenAnswer = (questNum) => readlineSync.question(
  'Answer "yes" if the number is even, otherwise answer "no".\n'
  + `Question: ${questNum}\n`
  + 'Your answer: ',
);

export default (gameName = null, questNum = null) => {
  switch (gameName) {
    case 'brain-even':
      return getBrainEvenAnswer(questNum);
    default:
      return getUserName();
  }
};
