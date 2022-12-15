import React from "react";

function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function move() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(move, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
