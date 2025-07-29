function throttle(cbFn, delay) {
  let timerID = null;
  return () => {
    if (!timerID) {
      cbFn();

      timerID = setTimeout(() => {
        //cbFn();
        timerID = null;
      }, delay);
    }
  };
}
