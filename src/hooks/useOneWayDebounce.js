// WRONG CODE — Work In Progress
import { createSignal, createEffect } from "solid-js";

export default function useOneWayDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = createSignal(value);

  createEffect(() => {
    if (value !== false && value !== true) {
      return debouncedValue;
    }

    if (value === false) {
      setDebouncedValue(false);
    } else {
      const handler = setTimeout(() => {
        setDebouncedValue(true);
      }, delay);
      // return () => {
      //   clearTimeout(handler);
      // };
    }
  });

  // console.log({ debouncedValue: debouncedValue() });
  return debouncedValue;
}
