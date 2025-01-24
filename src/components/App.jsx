import { useState } from 'react';
import { calculatorButtons } from '../assets/calculator-base-button-data';
import '../styles/App.css';
import CalculatorScreen from './CalculatorScreen.jsx';
import Header from './Header.jsx';
import CalculatorButtons from './CalculatorButtons.jsx';
function App() {
  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');

  return (
    <div className="wrapper">
      <Header title="Calculator" />
      <CalculatorScreen
        firstNumber={firstNumber}
        operator={operator}
        secondNumber={secondNumber} />
      <CalculatorButtons buttons={calculatorButtons} />
    </div>
  );
}

export default App;
