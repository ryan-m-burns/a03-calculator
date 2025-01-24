import CalculatorButton from "./CalculatorButton";

export default function CalculatorButtons ({ buttons }) {
  return (
    <div className="calculator-buttons">
      {buttons.map((button) => (
        <CalculatorButton
          key={button.text}
          type={button.type}
          className={button.className}
          text={button.text}
        >
          {button.text}
        </CalculatorButton>
      ))}
    </div>
  );
}