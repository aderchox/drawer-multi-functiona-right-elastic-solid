import { createSignal, createEffect, on, onCleanup } from "solid-js";

export default function createDebounced(signal, delay) {
  const [debouncedSignal, setDebouncedSignal] = createSignal(signal());
  const [timerHandle, setTimerHandle] = createSignal();

  createEffect(
    on(signal, (s) => {
      setTimerHandle(
        setTimeout(() => {
          setDebouncedSignal(s);
        }, delay)
      );
      onCleanup(() => clearTimeout(timerHandle()));
    })
  );

  return debouncedSignal;
}
