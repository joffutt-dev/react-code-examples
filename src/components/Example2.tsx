import { useEffect, useState } from "react";

interface Example2Props {
  parentVariable: string;
}

export function Example2({ parentVariable }: Example2Props) {
  const [localVariable, setLocalVariable] = useState(parentVariable);

  useEffect(() => {
    setLocalVariable(parentVariable);
  }, [parentVariable]);

  return (
    <div>
      <button
        className="btn bg-slate-400 p-2"
        onClick={() => {
          setLocalVariable("new value");
        }}
      >
        Click Me
      </button>
      <span className="ml-2">Current Local Variable: {localVariable}</span>
    </div>
  );
}
