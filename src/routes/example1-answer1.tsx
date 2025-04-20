import { createFileRoute } from "@tanstack/react-router";
import { Example1Answer1 } from "~/components/Example1-Answer1";

export const Route = createFileRoute("/example1-answer1")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div>
      Example Template Possible Answer
      <Example1Answer1 />
    </div>
  );
}
