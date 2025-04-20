import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { example1QueryOptions } from "~/utils/users";

export const Route = createFileRoute("/example2")({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(example1QueryOptions());
  },
  component: Example1Component,
});

function Example1Component() {
  const Example1Query = useSuspenseQuery(example1QueryOptions());

  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">
        {[
          ...Example1Query.data,
          { id: "i-do-not-exist", name: "Non-existent User", email: "" },
        ].map((user) => {
          return (
            <li key={user.id} className="whitespace-nowrap">
              <Link
                to="/example1"
                // params={{
                //   userId: String(user.id),
                // }}
                className="block py-1 text-blue-800 hover:text-blue-600"
                activeProps={{ className: "text-black font-bold" }}
              >
                <div>{user.name}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
