import React, { useState } from 'react';

function ControlledForm() {
  const [inputValue, setInputValue] = useState('');

  return (
    <form>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <p>Input: {inputValue}</p>
    </form>
  );
}

export default ControlledForm;
