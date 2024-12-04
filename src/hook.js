import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, bind];
}

function Form() {
  const [name, bindName] = useInput('');

  return (
    <div>
      <input type="text" {...bindName} />
      <p>Name: {name}</p>
    </div>
  );
}

export default Form;

