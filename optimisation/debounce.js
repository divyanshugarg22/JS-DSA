function debounce(cbFn, delay) {
  let timerID = null;
  return () => {
    if (timerID) {
      clearTimeout(timerID);
    }
    timerID = setTimeout(() => {
      cbFn();
      timerID = null;
    }, delay);
  };
}
