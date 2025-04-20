import { createFileRoute } from "@tanstack/react-router";
import { Example1 } from "~/components/Example1";

export const Route = createFileRoute("/example1/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div>
      Example Template
      <Example1 />
    </div>
  );
}
