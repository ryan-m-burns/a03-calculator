import "../styles/CalculatorScreen.css";

export default function CalculatorScreen({ displayValue }) {
  return (
    <div className="calculator-screen">
      <div className="calculator-screen__output">{displayValue}</div>
    </div>
  );
}