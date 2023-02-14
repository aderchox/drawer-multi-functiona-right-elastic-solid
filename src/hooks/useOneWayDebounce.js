import { createSignal } from "solid-js";

export default function createDebounced(v, options) {
  const [value, setValue] = createSignal(v);
  let crn = 0;
  const setValueDebounced = async (v) => {
    const ref = (crn += 1) % Number.MAX_SAFE_INTEGER;
    await options.delayer();
    if (ref === crn) setValue(() => v);
  };
  return [value, setValueDebounced];
}
