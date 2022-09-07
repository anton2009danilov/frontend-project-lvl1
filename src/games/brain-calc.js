const digitCapacity = 100;

const calcAnswer = (questArr) => {
  const [num1, num2, sign] = questArr;
  let result;

  switch (sign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = num1 / num2;
      break;
  }

  return String(result);
};

export const generateQuestionText = (questData) => {
  const [num1, num2, sign] = questData;

  return 'What is the result of the expression?\n'
  + `Question: ${num1} ${sign} ${num2}\n`
  + 'Your answer: ';
};

export default () => {
  const num1 = Math.floor(Math.random() * digitCapacity);
  const num2 = Math.floor(Math.random() * digitCapacity);

  const genSign = () => {
    const mathSigns = ['+', '-', '*'];
    const random = Math.floor(Math.random() * mathSigns.length);

    return mathSigns[random];
  };

  const sign = genSign();

  const questArr = [num1, num2, sign];

  return [calcAnswer(questArr), generateQuestionText(questArr)];
};
