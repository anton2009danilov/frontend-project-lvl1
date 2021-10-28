import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const getBrainEvenAnswer = (num) => readlineSync.question(
  'Answer "yes" if the number is even, otherwise answer "no".\n'
  + `Question: ${num}\n`
  + 'Your answer: ',
);

export default (request, param = null) => {
  switch (request) {
    case 'name': return getUserName();
    case 'brain-even':
      return getBrainEvenAnswer(param);
    default:
      return 'default';
  }
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
