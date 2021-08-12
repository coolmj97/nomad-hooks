import { useRef, useEffect } from 'react';

export const useClick = (onClick) => {
  const element = useRef(); //h1

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    return () => {
      //componentWillUnmount
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []);

  if (typeof onClick !== 'function') {
    return;
  }
  return element;
};

const App = () => {
  const sayHello = () => console.log('say hello');
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
