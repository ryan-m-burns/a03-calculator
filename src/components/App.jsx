import { useState } from 'react';
import { calculatorButtons } from '../assets/calculator-base-button-data';
import { handleNumber, handleOperator, handleClear, handleEnter } from '../utils/clickHandlers.js';
import '../styles/App.css';
import CalculatorScreen from './CalculatorScreen.jsx';
import Header from './Header.jsx';
import CalculatorButtons from './CalculatorButtons.jsx';
function App() {
  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [displayValue, setDisplayValue] = useState('0');

  function handleClick(btnData) {

    // JOB: Is not to DO any work directly
    // Just look at the clicked buttons type, and pass the job
    // off to the matching helper function
  
      console.log(btnData);
      if (btnData.type === "operator") {
        handleOperator(btnData, setOperator, setDisplayValue);
      } else if (btnData.type === "number") {
        // do something else
        handleNumber(btnData);
      } else if (btnData.type === "clear") {
        handleClear(btnData);
      } else if (btnData.type === "Enter") {
        handleEnter(btnData);
      }
    }


  return (
    <div className="wrapper">
      <Header title="Calculator" />
      <CalculatorScreen
        displayValue={displayValue} />
      <CalculatorButtons buttons={calculatorButtons} handleClick={handleClick} />
    </div>
  );
}

export default App;
