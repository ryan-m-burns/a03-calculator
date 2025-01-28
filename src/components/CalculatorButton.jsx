function CalculatorButton({ btnData, handleClick }) {
  const addBootstrapCSS = (btnType) => {
    let baseClasses = 'btn m-1 p-3';

    switch (btnType) {
      case 'operator':
        return `${baseClasses} btn-warning`;
      case 'number':
        return `${baseClasses} btn-secondary`;
      case 'equals':
        return `${baseClasses} btn-primary`;
      case 'clear':
        return `${baseClasses} btn-danger`;
      case 'decimal':
        return `${baseClasses} btn-info`;
      default:
        return `${baseClasses} btn-info`;
    }
  };

  return (
    <button
      className={`${addBootstrapCSS(btnData.type)} ${btnData.className || ''}`}
      type="button"
      value={btnData.value}
      onClick={() => handleClick(btnData)}
    >
      {btnData.text}
    </button>
  );
}

export default CalculatorButton;
