import { useRef } from 'react';

const useFullscreen = (callback) => {
  const element = useRef();

  const runCb = (isFull) => {
    if (callback && typeof callback === 'function') {
      callback(isFull); //onFullS
    }
  };

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCb(true);
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
    runCb(false);
  };

  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? 'We are full' : 'We are small');
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="" width="250" />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
};

export default App;
