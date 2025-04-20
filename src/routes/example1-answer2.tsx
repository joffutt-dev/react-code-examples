import { createFileRoute } from "@tanstack/react-router";
import { Example1Answer2 } from "~/components/Example1-Answer2";

export const Route = createFileRoute("/example1-answer2")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div>
      Example Template Possible Answer
      <Example1Answer2 />
    </div>
  );
}
