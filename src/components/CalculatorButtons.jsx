import CalculatorButton from "./CalculatorButton";

export default function CalculatorButtons ({ buttons, handleClick }) {
  return (
    <div className="calculator-buttons">
      {buttons.map((button) => (
        <CalculatorButton
          key={button.text}
          btnData={button}
          handleClick={handleClick}
        >
          {button.text}
        </CalculatorButton>
      ))}
    </div>
  );
}