import { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      //위로 벗어날 때만 호출
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => {
      document.removeEventListener('mouseleave', handle);
    };
  }, []);
  if (typeof onBefore !== 'function') {
    return;
  }
};

const App = () => {
  const begForLife = () => console.log('Pls dont leave');
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
