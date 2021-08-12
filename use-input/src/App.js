import { useState } from 'react';

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    //const value = event.target.value;
    const {
      target: { value },
    } = event;

    let willUpdate = true;

    if (typeof validator === 'function') {
      willUpdate = validator(value); //true or false
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10; //validator
  const name = useInput('Mr.', maxLen);
  return (
    <div>
      <h1 className="App">Hello</h1>
      <input type="text" placeholder="Name" {...name} />
    </div>
  );
};

export default App;
