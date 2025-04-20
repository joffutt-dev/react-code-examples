import { createFileRoute } from "@tanstack/react-router";
import { Example2 } from "~/components/Example2";

export const Route = createFileRoute("/example2/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div>
      Example Template
      <Example2 parentVariable="set in parent" />
    </div>
  );
}
