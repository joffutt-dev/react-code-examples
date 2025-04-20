import { useEffect, useState } from "react";

import axios from "redaxios";
import { User } from "~/utils/users";

export function Example1() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return <div>{JSON.stringify(users)}</div>;
}
