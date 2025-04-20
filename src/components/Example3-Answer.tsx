import { useState } from "react";

export function Example3Answer() {
  const [localVariable1, setLocalVariable1] = useState(0);
  const [localVariable2, setLocalVariable2] = useState(localVariable1 + 1);

  return (
    <div>
      <button
        className="btn bg-slate-400 p-2"
        onClick={() => {
          const newLocaleVariable1 = 5;
          setLocalVariable1(newLocaleVariable1);
          setLocalVariable2(newLocaleVariable1 + 1);
        }}
      >
        Click Me
      </button>
      <div>Current Local Variable1: {localVariable1}</div>
      <div>Current Local Variable2: {localVariable2}</div>
    </div>
  );
}
