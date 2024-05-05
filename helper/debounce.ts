export const debounce = <T>(fn: (...args: T[]) => void, delay: number) => {
  let timerId: NodeJS.Timeout;
  return (...args: T[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
