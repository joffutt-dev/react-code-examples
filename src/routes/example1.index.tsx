import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/example1/")({
  component: IndexComponent,
});

function IndexComponent() {
  return <div>Example Template</div>;
}
