// Calculator.js
import React, { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState(''); // State to hold the display value

  // Function to handle button clicks
  const handleClick = (value) => {
    // If the value is 'C', clear the display
    if (value === 'C') {
      setDisplay('');
    } else if (value === '=') { // If the value is '=', evaluate the expression
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error'); // If there's an error in evaluation, display 'Error'
      }
    } else { // For other values, append them to the display
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly /> {/* Display input field */}
      <div className="buttons">
        {/* Buttons for numbers and operators */}
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
