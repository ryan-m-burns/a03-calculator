import '../styles/CalculatorScreen.css';

export default function CalculatorScreen({ display }) {
  return (
    <div className="calculator-screen">
      <div className="calculator-screen__output">{display}</div>
    </div>
  );
}
