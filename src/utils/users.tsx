import { queryOptions } from "@tanstack/react-query";
import axios from "redaxios";

export type User = {
  id: number;
  name: string;
  email: string;
};

export const DEPLOY_URL = "http://localhost:3000";

export const usersQueryOptions = () =>
  queryOptions({
    queryKey: ["users"],
    queryFn: () =>
      axios
        .get<Array<User>>(DEPLOY_URL + "/api/users")
        .then((r) => r.data)
        .catch(() => {
          throw new Error("Failed to fetch users");
        }),
  });

// export const example1QueryOptions = () =>
//   queryOptions({
//     queryKey: ["example1"],
//     queryFn: () =>
//       axios
//         .get<Array<User>>(DEPLOY_URL + "/api/example1")
//         .then((r) => r.data)
//         .catch(() => {
//           throw new Error("Failed to fetch example1");
//         }),
//   });

// export const example2QueryOptions = () =>
//   queryOptions({
//     queryKey: ["example2"],
//     queryFn: () =>
//       axios
//         .get<Array<User>>(DEPLOY_URL + "/api/example2")
//         .then((r) => r.data)
//         .catch(() => {
//           throw new Error("Failed to fetch example2");
//         }),
//   });

// export const example3QueryOptions = () =>
//   queryOptions({
//     queryKey: ["example3"],
//     queryFn: () =>
//       axios
//         .get<Array<User>>(DEPLOY_URL + "/api/example3")
//         .then((r) => r.data)
//         .catch(() => {
//           throw new Error("Failed to fetch example3");
//         }),
//   });

export const userQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["users", id],
    queryFn: () =>
      axios
        .get<User>(DEPLOY_URL + "/api/users/" + id)
        .then((r) => r.data)
        .catch(() => {
          throw new Error("Failed to fetch user");
        }),
  });
