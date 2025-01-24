function CalculatorButton({ btnData, handleClick }) {


  return (
    <button className={btnData.className} type={btnData.type} value={btnData.value} onClick={() => handleClick(btnData)}>
      {btnData.text}
    </button>
  );
}

export default CalculatorButton;
