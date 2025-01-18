/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

import '../styles/App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
