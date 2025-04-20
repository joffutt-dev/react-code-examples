import { useEffect, useRef, useState } from "react";

import axios from "redaxios";
import { User } from "~/utils/users";

export function Example1Answer1() {
  const [users, setUsers] = useState<User[]>();

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      axios
        .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data));
      isMounted.current = true;
    }

    // Optional cleanup function (runs on unmount and before the second effect in strict mode)
    return () => {
      console.log("Cleanup is running");
      // Perform cleanup actions here (e.g., unsubscribe, cancel requests)
    };
  }, []);

  return <div>{JSON.stringify(users)}</div>;
}
