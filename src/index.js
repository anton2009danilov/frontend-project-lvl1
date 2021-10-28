import cli from './cli.js';

const maxRounds = 3;
let userName = '';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  userName = cli('name');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const askQuestion = (quest) => cli(quest);

export default (quest, correctAnswer) => {
  let roundNum = 0;

  userName = sayHello();
  while ()
  const userAnswer = askQuestion(quest);
};
