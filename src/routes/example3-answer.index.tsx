import { createFileRoute } from "@tanstack/react-router";
import { Example3Answer } from "~/components/Example3-Answer";

export const Route = createFileRoute("/example3-answer/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div>
      Example Template
      <Example3Answer />
    </div>
  );
}
