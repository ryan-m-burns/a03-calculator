function CalculatorButton({ type, className, text, value }) {
  return (
    <button className={className} type={type} value={value}>
      {text}
    </button>
  );
}

export default CalculatorButton;
