import runGame from '../index.js';

const digitCapacity = 100;

const stepBottomLimit = 1;
const stepTopLimit = 21;
const minLength = 5;
const maxLength = 10;

const generateQuestionText = (questString) => {
  const description = 'What number is missing in the progression?\n';
  const task = `Question: ${questString}\n`;

  return `${description}${task}`;
};

const generateQuest = () => {
  const progression = [];

  const length = Math.floor(Math.random() * (maxLength - minLength) + minLength);
  let newNum = Math.floor(Math.random() * digitCapacity);
  const secretNumPosition = Math.floor(Math.random() * length);
  const step = Math.floor(Math.random() * (stepTopLimit - stepBottomLimit) + stepBottomLimit);
  let position = 0;
  let secretNum;

  do {
    if (position === secretNumPosition) {
      progression.push('..');
      secretNum = newNum;
    } else {
      progression.push(newNum);
    }

    newNum += step;
    position += 1;
  } while (position < length);

  return [String(secretNum), generateQuestionText(progression.join(' '))];
};

export default () => runGame(generateQuest);
