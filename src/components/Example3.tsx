import { useEffect, useState } from "react";

export function Example3() {
  const [localVariable1, setLocalVariable1] = useState(0);
  const [localVariable2, setLocalVariable2] = useState(0);

  useEffect(() => {
    setLocalVariable2(localVariable1 + 1);
  }, [localVariable1]);

  return (
    <div>
      <button
        className="btn bg-slate-400 p-2"
        onClick={() => {
          const newLocaleVariable1 = 5;
          setLocalVariable1(newLocaleVariable1);
        }}
      >
        Click Me
      </button>
      <div>Current Local Variable1: {localVariable1}</div>
      <div>Current Local Variable2: {localVariable2}</div>
    </div>
  );
}
