import { useState } from 'react';
import { calculatorButtons } from '../assets/calculator-base-button-data';
import '../styles/App.css';
import CalculatorButton from './CalculatorButton.jsx';
function App() {
  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');

  return (
    <div>
      {calculatorButtons.map((button) => (
        <CalculatorButton
          key={button.text}
          type={button.type}
          className={button.className}
          text={button.text}
        >
          {button.text}
        </CalculatorButton>
      ))}
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
