const digitCapacity = 1000;
const isEven = (num) => num % 2 === 0;

const calcAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const generateQuestionText = (num) => 'Answer "yes" if the number is even, otherwise answer "no".\n'
  + `Question: ${num}\n`
  + 'Your answer: ';

export default () => {
  const num = Math.floor(Math.random() * digitCapacity);

  return [calcAnswer(num), generateQuestionText(num)];
};
