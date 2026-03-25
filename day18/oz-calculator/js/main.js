import { appendNumber, setOperator, resetDisplay, 
  VALID_NUMBERS, VALID_OPERATORS, currentInput, isError } from './index.js';
import calculate from './index.js';

console.log(currentInput);

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (VALID_NUMBERS.includes(key)) currentInput = appendNumber(key, currentInput);
  if (VALID_OPERATORS.includes(key)) setOperator(key, currentInput);
  if (key === "Enter") calculate();
  if (key === "Backspace") subDisplay();
  console.log(currentInput);
});