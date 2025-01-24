const handleOperator = (btnData, setOperator, setDisplayValue) => {
    setOperator(btnData.value);
    setDisplayValue(btnData.value);
    console.log("HI");
}

const handleNumber = (data) => {
    // JOB: Is to DO the work of the number
    // 1. Set the secondNumber state
    // 2. Set the displayValue state
}

const handleClear = (data) => { 
    // JOB: Is to DO the work of the clear button
    // 1. Reset all states
}

const handleEnter = (data) => { 
    // JOB: Is to DO the work of the enter button
    // 1. Perform the calculation
    // 2. Set the displayValue state
}

export { handleOperator, handleNumber, handleClear, handleEnter };