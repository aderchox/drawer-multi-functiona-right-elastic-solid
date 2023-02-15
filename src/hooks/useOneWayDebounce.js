import { createSignal, createEffect, on, onCleanup } from "solid-js";

export default function createDebounced(signal, delay) {
  const [debouncedSignal, setDebouncedSignal] = createSignal(signal());
  let timerHandle;
  createEffect(
    on(signal, (s) => {
      timerHandle = setTimeout(() => {
        setDebouncedSignal(s);
      }, delay);
      onCleanup(() => clearTimeout(timerHandle));
    })
  );
  return debouncedSignal;
}
