import { useQuery } from "@tanstack/react-query";

import axios from "redaxios";
import { User } from "~/utils/users";

export function Example1Answer2() {
  const { data: users } = useQuery({
    queryKey: ["user-query"],
    queryFn: () =>
      axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users"),
  });

  return <div>{JSON.stringify(users)}</div>;
}
