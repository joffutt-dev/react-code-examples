import { createFileRoute } from "@tanstack/react-router";
import { Example3 } from "~/components/Example3";

export const Route = createFileRoute("/example3/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div>
      Example Template
      <Example3 />
    </div>
  );
}
