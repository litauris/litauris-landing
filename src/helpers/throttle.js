export function throttle(callback, limit) {
  let waiting = false;

  return (...args) => {
    if (!waiting) {
      callback.apply(this, args);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
