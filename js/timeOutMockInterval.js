function simulateInterval(callback, interval) {
  let timerId = null;

  function fn() {
    callback();
    clearTimeout(timerId);
    timerId = setTimeout(fn, interval);
  }

  return setTimeout(fn, interval);
};

simulateInterval(()=>{console.log(1)}, 2000);

const intervalId = function simulateInterval(callback, interval) {
  let timerId = null;

  function fn() {
    callback();
    const prevTimmerId = timerId;
    timerId = setTimeout(fn, interval);
    clearTimeout(prevTimmerId);
  }

  return setTimeout(fn, interval);
};

function simulateClearInterval(intervalId) {
  clearTimeout(intervalId);
}