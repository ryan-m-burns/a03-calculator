import { useState } from 'react';
import { calculatorButtons } from '../assets/calculator-bonus-03-button-data.js';
import '../styles/App.css';
import CalculatorScreen from './CalculatorScreen.jsx';
import Header from './Header.jsx';
import CalculatorButtons from './CalculatorButtons.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [storedNumber, setStoredNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleOperator = (operator) => {
    if (operation && !newNumber) {
      calculateResult();
    }

    setOperation(operator);
    setStoredNumber(display);
    setNewNumber(true);
  };

  const handleSign = () => {
    setDisplay((parseFloat(display) * -1).toString());
  };

  const handleNumber = (number) => {
    if (number === '.' && display.includes('.')) return;

    if (newNumber) {
      setDisplay(number.toString());
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? number : display + number.toString());
    }
  };

  const handleClear = (clear) => {
    if (clear === 'All Clear') {
      setDisplay('0');
      setStoredNumber(null);
      setOperation(null);
      setNewNumber(true);
    } else {
      setDisplay('0');
      setNewNumber(true);
    }
  };

  const calculateResult = () => {
    if (storedNumber === null || operation === null) return;
    const firstNumber = parseFloat(storedNumber);
    const secondNumber = parseFloat(display);
    let result;

    switch (operation) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      case '/':
        result = secondNumber !== 0 ? firstNumber / secondNumber : 'Error';
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setStoredNumber(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleClick = (btnData) => {
    console.log(btnData.value);

    switch (btnData.type) {
      case 'operator':
        handleOperator(btnData.value);
        break;
      case 'number':
        handleNumber(btnData.value);
        break;
      case 'clear':
        handleClear(btnData.value);
        break;
      case 'enter':
        calculateResult();
        break;
      case 'sign':
        handleSign();
        break;
      default:
        return;
    }
  };

  return (
    <div className="wrapper">
      <Header title="Calculator" />
      <CalculatorScreen display={display} />
      <CalculatorButtons
        buttons={calculatorButtons}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
